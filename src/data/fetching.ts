import type {
  CasoDependencia,
  CasoGatillo,
  CasoReportes,
  DataDeCasos,
} from "../models/casos";
import type { Cargo } from "../models/cargos";
import type { Autor } from "../models/autorxs";
import type { Investigacion } from "../models/investigacion";

export const getCargos = async (): Promise<Cargo[] | null> => {
  const response = await fetch("data/cargos.json");
  const data: Cargo[] | undefined = await response.json();
  return data ?? null;
};

function isFeatureCollection<T>(value: unknown): value is DataDeCasos<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    (value as any).type === "FeatureCollection" &&
    Array.isArray((value as any).features)
  );
}

function parseCoordinatesString(value: unknown): number[] | null {
  if (typeof value !== "string") return null;
  const parts = value.split(",").map((item) => item.trim());
  if (parts.length !== 2) return null;
  const [latText, lngText] = parts;
  const lat = Number(latText);
  const lng = Number(lngText);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return [lng, lat];
  }
  return null;
}

function convertDependenciasRowsToFeatureCollection(
  rows: any[],
): DataDeCasos<CasoDependencia> | null {
  if (!Array.isArray(rows)) return null;

  const features = rows
    .map((row) => {
      const coordinates = parseCoordinatesString(row.coordenadas);
      if (!coordinates) return null;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates,
        },
        properties: {
          Contador:
            typeof row.id === "string" || typeof row.id === "number"
              ? `d${row.id}`
              : `d-${Math.random().toString(36).slice(2, 8)}`,
          Dependencia: row.nombre_dependencia ?? "",
          Nombre: row.nombre_dependencia ?? "",
          Organismo: row.autoridad_superior ?? "",
          Partido: row.comuna_departamento ?? "",
          Dirección: row.domicilio_exacto ?? "",
          Teléfono: row.telefono ?? "",
          Tel_Judicial: row.tel_judicial ?? "",
          Tel_Jefe: row.tel_jefe ?? "",
          Nombre_Anterior: row.nombre_anterior_dependencia ?? "",
          coordinates: row.coordenadas ?? "",
        },
      } as CasoDependencia;
    })
    .filter(Boolean) as CasoDependencia[];

  if (features.length === 0) return null;
  return {
    type: "FeatureCollection",
    features,
  };
}

export const getDataDeCasosDependencias =
  async (): Promise<DataDeCasos<CasoDependencia> | null> => {
    const response = await fetch("data/dependenciasCaba.json");
    const data = await response.json();
    if (isFeatureCollection<CasoDependencia>(data)) return data;

    const fallback = convertDependenciasRowsToFeatureCollection(data as any[]);
    if (fallback) {
      console.warn(
        "Converted dependenciasCaba.json rows into GeoJSON feature collection.",
      );
      return fallback;
    }

    return null;
  };

function convertReportesRowsToFeatureCollection(
  rows: any[],
): DataDeCasos<CasoReportes> | null {
  if (!Array.isArray(rows)) return null;

  const features = rows
    .map((row) => {
      const coordinates = parseCoordinatesString(row.coordenadas);
      if (!coordinates) return null;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates,
        },
        properties: {
          Contador: typeof row.id === "string" || typeof row.id === "number"
            ? `r${row.id}`
            : `r-${Math.random().toString(36).slice(2, 8)}`,
          Fecha: row.fecha ?? "",
          Hora: row.Hora_Hecho ?? "",
          Barrio: row.barrio_municipio ?? "",
          Direccion: row.domicilio_exacto ?? "",
          Lugar: row.Lugar ?? "",
          fuerza_involucrada: row.comuna_departamento ?? "",
          Nombre: row.apellido ?? row.barrio_municipio ?? "Reporte",
          policia_involucrado: row.policias_implicados ?? "",
          cronica: row.Cronica ?? "",
        },
      } as CasoReportes;
    })
    .filter(Boolean) as CasoReportes[];

  if (features.length === 0) return null;
  return {
    type: "FeatureCollection",
    features,
  };
}

export const getDataDeCasosReportes =
  async (): Promise<DataDeCasos<CasoReportes> | null> => {
    const response = await fetch("data/reportesCaba.json");
    const data = await response.json();
    if (
      data &&
      typeof data === "object" &&
      !Array.isArray(data) &&
      "features" in data &&
      Array.isArray((data as any).features)
    ) {
      return data as DataDeCasos<CasoReportes>;
    }

    const fallback = convertReportesRowsToFeatureCollection(data as any[]);
    if (fallback) {
      console.warn(
        "Converted reportesCaba.json rows into GeoJSON feature collection.",
      );
      return fallback;
    }

    console.warn(
      "reportesCaba.json did not match expected FeatureCollection schema.",
      data,
    );
    return null;
  };

function convertGatilloRowsToFeatureCollection(
  rows: any[],
): DataDeCasos<CasoGatillo> | null {
  if (!Array.isArray(rows)) return null;

  const features = rows
    .map((row) => {
      const coordinates = parseCoordinatesString(row.coordenadas);
      if (!coordinates) return null;

      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates,
        },
        properties: {
          Contador:
            typeof row.id === "string" || typeof row.id === "number"
              ? `g${row.id}`
              : `g-${Math.random().toString(36).slice(2, 8)}`,
          Nombre: row.nombre ?? "",
          Edad: row.edad ?? "",
          Año: row.año ?? 0,
          Fecha: row.fecha ?? "",
          cronica: row.cronica ?? "",
          Barrio: row.barrio ?? "",
          Direccion: row.direccion ?? "",
          link: row.link ?? "",
          policia_involucrado: row.policia_involucrado ?? "",
          fuerza_involucrada: row.fuerza_involucrada ?? "",
        },
      } as CasoGatillo;
    })
    .filter(Boolean) as CasoGatillo[];

  if (features.length === 0) return null;
  return {
    type: "FeatureCollection",
    features,
  };
}

export const getDataDeCasosGatillo =
  async (): Promise<DataDeCasos<CasoGatillo> | null> => {
    const response = await fetch("data/gatilloCaba.json");
    const data = await response.json();
    if (isFeatureCollection<CasoGatillo>(data)) return data;

    const fallback = convertGatilloRowsToFeatureCollection(data as any[]);
    if (fallback) {
      console.warn(
        "Converted gatilloCaba.json rows into GeoJSON feature collection.",
      );
      return fallback;
    }

    return null;
  };

export const fetchAutor = async (enlaceVer: string): Promise<Autor | null> => {
  const response = await fetch("data/autorxs.json");
  const data: Autor[] = await response.json();
  // Buscar el autor por el enlaceVer
  return data.find((autor) => autor.enlaceVer === `/${enlaceVer}`) ?? null;
};

export const fetchAutorxs = async (): Promise<Autor[] | null> => {
  const response = await fetch("data/autorxs.json");
  const data: Autor[] = await response.json();
  return data;
};

export const fetchInvestigaciones = async (): Promise<
  Investigacion[] | null
> => {
  const response = await fetch(`/data/investigaciones.json`);
  const data: Investigacion[] = await response.json();
  return data;
};
export const fetchInvestigacionByDominio = async (
  dominio?: string,
): Promise<Investigacion | null> => {
  const data = await fetchInvestigaciones();
  return data?.find((item) => item.dominio === dominio) ?? null;
};
