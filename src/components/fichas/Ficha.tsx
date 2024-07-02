import { useParams } from "react-router-dom";
import dependenciasCaba from "../../data/dependenciasCaba.json";
import gatilloCaba from "../../data/gatilloCaba.json";
import reportesCaba from "../../data/reportesCaba.json";
import styles from "./Ficha.module.css";

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

type DataDeCaso<T extends Caso = Caso> = {
  type: string;
  features: T[];
};

const casoIsCasoDependencia = (c: Caso): c is CasoDependencia =>
  c.properties.Contador[0] === "d";
const casoIsCasoGatillo = (c: Caso): c is CasoGatillo =>
  c.properties.Contador[0] === "g";
const casoIsCasoReportes = (c: Caso): c is CasoReportes =>
  c.properties.Contador[0] === "r";

type TipoDeCaso = "dependencias" | "gatillo" | "reportes";

// Determinar el tipo de caso según el primer carácter del parámetro de la URL `Contador`
const getTipoDeCasoByContadorParam = (contador: string) => {
  if (contador[0] === "d") {
    return "dependencias";
  } else if (contador[0] === "g") {
    return "gatillo";
  } else if (contador[0] === "r") {
    return "reportes";
  } else {
    return "no encontrado";
  }
};

const titleByTipoCaso: Record<TipoDeCaso, string> = {
  gatillo: "Caso de gatillo fácil",
  dependencias: "dependencia policial",
  reportes: "Reporte de violencia policial",
};

const dataByTipoCaso: Record<TipoDeCaso, DataDeCaso> = {
  gatillo: gatilloCaba,
  dependencias: dependenciasCaba,
  reportes: reportesCaba,
};

const Ficha = () => {
  const { Contador: contador } = useParams();
  if (contador === undefined) return <div>URL inválido (sin contador).</div>;
  const tipoCaso = getTipoDeCasoByContadorParam(contador);
  if (tipoCaso === "no encontrado") return <div>Tipo de caso inválido.</div>;
  const dataDelTipoDelCaso = dataByTipoCaso[tipoCaso];
  const caso = dataDelTipoDelCaso.features.find(
    // "contador" es el ID del caso
    (c) => c.properties.Contador === contador,
  );
  if (!caso) return <div>Caso no encontrado.</div>;
  return (
    <section className={styles.ficha}>
      <div className={styles.data}>
        <h2 className={styles.title}>
          {titleByTipoCaso[tipoCaso] ?? "Tipo Desconocido"}
        </h2>
        <ul>
          {casoIsCasoDependencia(caso) && (
            <>
              <li className={styles.age}>{caso.properties.Dependencia}</li>
              <li className={styles.name}>{caso.properties.Nombre}</li>
              <li className={styles.age}>
                Depende de: {caso.properties.Organismo}
              </li>
              <li className={styles.age}>
                Dirección: {caso.properties.Dirección}
              </li>
              <li className={styles.age}>
                Teléfono: {caso.properties.Teléfono}
              </li>
            </>
          )}
          {casoIsCasoGatillo(caso) && (
            <>
              <li className={styles.name}>{caso.properties.Nombre}</li>
              <li className={styles.age}>Fecha: {caso.properties.Fecha}</li>
              <li className={styles.age}>Edad: {caso.properties.Edad}</li>
              <li className={styles.age}>
                Dirección: {caso.properties.Direccion}
              </li>
              <li className={styles.age}>Ciudad: {caso.properties.Barrio}</li>
              <li className={styles.cronica}>
                Crónica: {caso.properties.cronica}
              </li>
            </>
          )}
          {casoIsCasoReportes(caso) && (
            <>
              <li className={styles.name}>{caso.properties.Nombre}</li>
              <li className={styles.age}>Fecha: {caso.properties.Fecha}</li>
              <li className={styles.age}>
                Dirección: {caso.properties.Direccion}
              </li>
              <li className={styles.age}>Ciudad: {caso.properties.Barrio}</li>
              <li className={styles.cronica}>
                Crónica: {caso.properties.cronica}
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.policeData}>
        {casoIsCasoGatillo(caso) && (
          <>
            <li className={styles.number}>
              Fuerza: {caso.properties.fuerza_involucrada}
            </li>
            <li className={styles.number}>
              Imputados: {caso.properties.policia_involucrado}
            </li>
          </>
        )}
        {casoIsCasoReportes(caso) && (
          <>
            <li className={styles.number}>
              Fuerza: {caso.properties.fuerza_involucrada}
            </li>
            <li className={styles.number}>
              Imputados: {caso.properties.policia_involucrado}
            </li>
          </>
        )}
      </div>
    </section>
  );
};

export default Ficha;
