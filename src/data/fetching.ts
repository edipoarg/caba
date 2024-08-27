import {
  CasoDependencia,
  CasoGatillo,
  CasoReportes,
  DataDeCasos,
} from "../models/casos";
import { Cargo } from "../models/cargos";
import { Autor } from "../models/autorxs";
import { Investigacion } from "../models/investigacion";

export const getCargos = async (): Promise<Cargo[] | null> => {
  const response = await fetch("data/cargos.json");
  const data: Cargo[] | undefined = await response.json();
  return data ?? null;
};

export const getDataDeCasosDependencias =
  async (): Promise<DataDeCasos<CasoDependencia> | null> => {
    const response = await fetch("data/dependenciasCaba.json");
    const data: DataDeCasos<CasoDependencia> | undefined =
      await response.json();
    return data ?? null;
  };

export const getDataDeCasosReportes =
  async (): Promise<DataDeCasos<CasoReportes> | null> => {
    const response = await fetch("data/reportesCaba.json");
    const data: DataDeCasos<CasoReportes> | undefined = await response.json();
    return data ?? null;
  };

export const getDataDeCasosGatillo =
  async (): Promise<DataDeCasos<CasoGatillo> | null> => {
    const response = await fetch("data/gatilloCaba.json");
    const data: DataDeCasos<CasoGatillo> | undefined = await response.json();
    return data ?? null;
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
