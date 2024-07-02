interface CasoBase {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
}

interface CasoDependencia extends CasoBase {
  properties: {
    Contador: string;
    Dependencia: string;
    Nombre: string;
    Organismo: string;
    Partido: string;
    Dirección: string;
    Teléfono: string;
    Tel_Judicial: string;
    Tel_Jefe: string;
    Nombre_Anterior: string;
    coordinates: string;
  };
}

interface CasoGatillo extends CasoBase {
  properties: {
    Contador: string;
    Nombre: string;
    Edad: string | number;
    Año: number;
    Fecha: string;
    cronica: string;
    Barrio: string;
    Direccion: string;
    link: string;
    policia_involucrado: string;
    fuerza_involucrada: string;
  };
}

interface CasoReportes extends CasoBase {
  properties: {
    Contador: string;
    Fecha: string;
    Hora: string;
    Barrio: string;
    Direccion: string;
    Lugar: string;
    fuerza_involucrada: string;
    Nombre: string;
    policia_involucrado: string;
    cronica: string;
  };
}

type Caso = CasoDependencia | CasoGatillo | CasoReportes;

/** Este tipo representa lo que está en los JSONs de casos */
export type DataDeCaso<T extends Caso = Caso> = {
  type: string;
  features: T[];
};

export const casoIsCasoDependencia = (c: Caso): c is CasoDependencia =>
  c.properties.Contador[0] === "d";
export const casoIsCasoGatillo = (c: Caso): c is CasoGatillo =>
  c.properties.Contador[0] === "g";
export const casoIsCasoReportes = (c: Caso): c is CasoReportes =>
  c.properties.Contador[0] === "r";
