import { useParams } from "react-router-dom";
import styles from "./Ficha.module.css";
import dependenciasCaba from "../../data/dependenciasCaba.json";
import gatilloCaba from "../../data/gatilloCaba.json";
import reportesCaba from "../../data/reportesCaba.json";

// Determinar el tipo de caso según el primer carácter del Contador
const getTipoDeCasoByContadorParam = (contador) => {
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

const titleByTipoCaso = {
  gatillo: "Caso de gatillo fácil",
  dependencias: "dependencia policial",
  reportes: "Reporte de violencia policial",
};

const dataByTipoCaso = {
  gatillo: gatilloCaba,
  dependencias: dependenciasCaba,
  reportes: reportesCaba,
};

const Ficha = () => {
  const { Contador: contador } = useParams();
  const tipoCaso = getTipoDeCasoByContadorParam(contador);
  if (tipoCaso === "no encontrado") return <div>Tipo de caso inválido.</div>;
  const dataDelTipoDelCaso = dataByTipoCaso[tipoCaso];
  const caso = dataDelTipoDelCaso.features.find(
    // FIXME Esto no está claro!
    (c) => c.properties.Contador === contador,
  );
  if (!caso) return <div>Caso no encontrado.</div>;
  const { properties } = caso;
  return (
    <>
      <section className={styles.ficha}>
        <div className={styles.data}>
          <h2 className={styles.title}>
            {titleByTipoCaso(tipoCaso) ?? "Tipo Desconocido"}
          </h2>
          <ul>
            {properties.Dependencia && (
              <li className={styles.age}>{properties.Dependencia}</li>
            )}
            {properties.Nombre && (
              <li className={styles.name}>{properties.Nombre}</li>
            )}
            {properties.Fecha && (
              <li className={styles.age}>Fecha: {properties.Fecha}</li>
            )}
            {properties.Organismo && (
              <li className={styles.age}>Depende de: {properties.Organismo}</li>
            )}
            {properties.Edad && (
              <li className={styles.age}>Edad: {properties.Edad}</li>
            )}
            {properties.Dirección && (
              <li className={styles.age}>Dirección: {properties.Dirección}</li>
            )}
            {properties.Teléfono && (
              <li className={styles.age}>Teléfono: {properties.Teléfono}</li>
            )}
            {properties.Barrio && (
              <li className={styles.age}>Ciudad: {properties.Barrio}</li>
            )}
            {properties.cronica && (
              <li className={styles.cronica}>Crónica: {properties.cronica}</li>
            )}
          </ul>
        </div>
        <div className={styles.policeData}>
          {properties.fuerza_involucrada && (
            <li className={styles.number}>
              Fuerza: {properties.fuerza_involucrada}
            </li>
          )}
          {properties.grado && (
            <li className={styles.number}>{properties.grado}</li>
          )}
          {properties.policia_involucrado && (
            <li className={styles.number}>
              Imputados: {properties.policia_involucrado}
            </li>
          )}
          {properties.autoridad && (
            <li className={styles.number}>{properties.autoridad}</li>
          )}
        </div>
      </section>
    </>
  );
};

export default Ficha;
