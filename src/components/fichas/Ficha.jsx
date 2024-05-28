import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Ficha.module.css";

const Ficha = () => {
  const { Contador } = useParams();
  const [caso, setCaso] = useState(null);
  let tipoCaso;

  // Determinar el tipo de caso según el primer carácter del Contador
  if (Contador[0] === "d") {
    tipoCaso = "dependencias";
  } else if (Contador[0] === "g") {
    tipoCaso = "gatillo";
  } else if (Contador[0] === "r") {
    tipoCaso = "reportes";
  } else {
    tipoCaso = "no encontrado";
  }

  useEffect(() => {
    const fetchCaso = async () => {
      try {
        // Obtener los datos del archivo JSON correspondiente al tipo de caso
        const response = await fetch(`data/${tipoCaso}Caba.json`);
        const data = await response.json();

        // Encontrar el caso por Contador
        const casoEncontrado = data.features.find(
          (c) => c.properties.Contador === Contador,
        );
        if (casoEncontrado) {
          setCaso(casoEncontrado);
        } else {
          console.log("Caso no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar los datos del caso:", error);
      }
    };

    fetchCaso();
  }, [Contador, tipoCaso]);

  if (!caso) {
    return <div>Cargando...</div>;
  }

  const { properties } = caso;

  return (
    <>
      <section className={styles.ficha}>
        <div className={styles.data}>
          <h2 className={styles.title}>
            {tipoCaso === "gatillo"
              ? "Caso de gatillo fácil"
              : tipoCaso === "dependencias"
                ? "dependencia policial"
                : tipoCaso === "reportes"
                  ? "Reporte de violencia policial"
                  : "Tipo Desconocido"}
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
