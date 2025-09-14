import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';

// Types for NocoDB v2 response
interface NocoListResponse<T = any> {
  list: T[];
  pageInfo?: {
    page: number;
    pageSize: number;
    totalRows: number;
  };
}

function isTransientError(err: any): boolean {
  if (!err) return false;
  const msg = String(err.message || err || '').toLowerCase();
  if (msg.includes('aborted') || msg.includes('timeout') || msg.includes('network')) return true;
  // If error has status code
  const status = (err.status ?? err.code ?? undefined) as number | undefined;
  if (typeof status === 'number') {
    if (status === 429) return true;
    if (status >= 500 && status < 600) return true;
  }
  return true; // default to retryable for safety
}

function backoffDelay(attempt: number): number {
  const base = RETRY_BASE_DELAY_MS * Math.pow(2, attempt);
  const jitter = Math.floor(Math.random() * (RETRY_BASE_DELAY_MS / 2));
  return base + jitter;
}

interface JobConfig {
  output: string; // relative path to write, e.g., public/data/autorxs.json
  tableId: string;
  viewId?: string;
  // Optionally select specific fields or apply simple transforms later
  fields?: string[];
}

interface ConfigFile {
  jobs: JobConfig[];
}

const BASE_URL = (process.env.NOCODB_BASE_URL || '').replace(/\/$/, '');
const API_KEY = process.env.NOCODB_API_KEY || '';
const REQUEST_TIMEOUT_MS = Number(process.env.NOCODB_TIMEOUT_MS || 60000);
const MAX_RETRIES = Math.max(0, Number(process.env.NOCODB_MAX_RETRIES || 3));
const RETRY_BASE_DELAY_MS = Math.max(100, Number(process.env.NOCODB_RETRY_BASE_DELAY_MS || 1000));
const VERBOSE = /^true$/i.test(String(process.env.NOCODB_VERBOSE || ''));

// Resolve a fetch implementation: prefer global (Node 18+), else fallback to node-fetch@2
let _fetch: any | null = null;
async function getFetch(): Promise<typeof fetch> {
  if (_fetch) return _fetch;
  if (typeof (globalThis as any).fetch === 'function') {
    _fetch = (globalThis as any).fetch.bind(globalThis);
    return _fetch;
  }
  try {
    const mod = await import('node-fetch');
    // node-fetch@2 default export is a function
    _fetch = (mod as any).default || (mod as any);
    return _fetch;
  } catch (e) {
    throw new Error('fetch is not defined and node-fetch is not installed. Please install node-fetch@2.');
  }
}

function assertEnv() {
  const missing: string[] = [];
  if (!BASE_URL) missing.push('NOCODB_BASE_URL');
  if (!API_KEY) missing.push('NOCODB_API_KEY');
  if (missing.length) {
    console.error(`Missing env vars: ${missing.join(', ')}`);
    console.error('Create a .env with these keys or export them in your shell.');
    process.exit(1);
  }
}

function expandEnvVars(str: string): string {
  return str.replace(/\$\{([^}]+)\}/g, (_, name) => {
    const value = process.env[name];
    if (value === undefined) {
      console.warn(`Environment variable ${name} is not set`);
      return '';
    }
    return value;
  });
}

async function readConfig(configPath: string): Promise<ConfigFile> {
  const abs = path.resolve(configPath);
  let raw = await fs.readFile(abs, 'utf8');
  
  // Expandir variables de entorno en el JSON
  raw = expandEnvVars(raw);
  
  const config = JSON.parse(raw) as ConfigFile;
  
  // Validar que no queden variables sin expandir
  const validateConfig = (obj: any) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && obj[key].includes('${')) {
        throw new Error(`Variable de entorno no expandida en ${key}: ${obj[key]}`);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        validateConfig(obj[key]);
      }
    }
  };
  
  validateConfig(config);
  return config;
}

async function fetchAllRecords(tableId: string, viewId?: string): Promise<any[]> {
  const headers = {
    'accept': 'application/json',
    'xc-token': API_KEY,
  } as Record<string, string>;

  const records: any[] = [];
  let page = 1;
  const pageSize = 1000; // adjust if needed

  while (true) {
    const url = new URL(`${BASE_URL}/api/v2/tables/${encodeURIComponent(tableId)}/records`);
    url.searchParams.set('limit', String(pageSize));
    url.searchParams.set('offset', String((page - 1) * pageSize));
    if (viewId) url.searchParams.set('viewId', viewId);
    if (VERBOSE) console.log(`[debug] Fetching: ${url.toString()}`);
    const data = (await fetchWithRetry(url, { headers })) as NocoListResponse;
    const batch = data.list || [];
    records.push(...batch);

    if (batch.length < pageSize) break; // last page
    page += 1;
  }

  return records;
}

async function fetchWithRetry(url: URL, opts: RequestInit): Promise<any> {
  let attempt = 0;
  let lastErr: any;
  while (attempt <= MAX_RETRIES) {
    try {
      const ac = new AbortController();
      const to = setTimeout(() => ac.abort(), REQUEST_TIMEOUT_MS);
      const f = await getFetch();
      const res = await f(url as any, { ...opts, signal: ac.signal });
      clearTimeout(to);
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      return res.json();
    } catch (err: any) {
      lastErr = err;
      const transient = isTransientError(err);
      if (!transient || attempt === MAX_RETRIES) break;
      const delay = backoffDelay(attempt);
      if (VERBOSE) console.warn(`[retry] attempt ${attempt + 1} failed: ${err?.message || err}. Retrying in ${delay}ms...`);
      await new Promise((r) => setTimeout(r, delay));
      attempt += 1;
      // ensure any pending timeout is cleared
      try { /* no-op if already cleared */ } catch {}
    }
  }
  throw new Error(`Request failed after ${attempt} attempt(s): ${lastErr?.message || lastErr}`);
}

async function ensureDirForFile(filePath: string) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function writeJsonAtomic(filePath: string, data: unknown) {
  const tmp = `${filePath}.tmp`;
  const json = JSON.stringify(data, null, 2);
  await fs.writeFile(tmp, json, 'utf8');
  await fs.rename(tmp, filePath);
}

async function run() {
  assertEnv();
  const args = process.argv.slice(2);
  const configPath = args.length ? args[args.length - 1] : 'noco.config.json';
  const { jobs } = await readConfig(configPath);
  if (!jobs || !Array.isArray(jobs) || jobs.length === 0) {
    console.error(`No jobs found in ${configPath}. Add at least one job.`);
    process.exit(1);
  }

  let ok = 0;
  let fail = 0;

  for (const job of jobs) {
    const outAbs = path.resolve(job.output);
    try {
      console.log(`Fetching table ${job.tableId}${job.viewId ? ` (view ${job.viewId})` : ''} -> ${job.output}`);
      const rows = await fetchAllRecords(job.tableId, job.viewId);

      // Optionally select specific fields
      const finalRows = job.fields && job.fields.length
        ? rows.map(r => Object.fromEntries(Object.entries(r).filter(([k]) => job.fields!.includes(k))))
        : rows;

      await ensureDirForFile(outAbs);
      await writeJsonAtomic(outAbs, finalRows);
      console.log(`Wrote ${finalRows.length} records to ${job.output}`);
      ok += 1;
    } catch (e: any) {
      console.error(`Failed for ${job.output}: ${e?.message || e}`);
      fail += 1;
    }
  }

  console.log(`Done. Success: ${ok}, Failed: ${fail}`);
  if (fail > 0) process.exit(1);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
