import { CasoGatillo } from "../models/casos";
import { Cargo } from "../models/cargos";

export const fetchCasosDeGatilloCABA = async (): Promise<
  CasoGatillo[] | null
> => {
  const response = await fetch("data/gatilloCaba.json");
  const data: { features: CasoGatillo[] } | undefined = await response.json();
  return data?.features ?? null;
};

export const getCargos = async (): Promise<Cargo[] | null> => {
  const response = await fetch("data/cargos.json");
  const data: Cargo[] | undefined = await response.json();
  return data ?? null;
};
