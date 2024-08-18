import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css";

const TodasInvestigaciones = () => {
  const [investigaciones, setInvestigaciones] = useState([]);

  useEffect(() => {
    fetch("/data/investigaciones.json")
      .then((response) => response.json())
      .then((data) => {
        const investigacionesInvertidas = data.reverse().slice(1);
        setInvestigaciones(investigacionesInvertidas);
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <>
      <div className={styles.todasContainer}>
        {investigaciones.map((investigacion) => (
          <Link
            key={investigacion.id}
            to={`/investigacion/${investigacion.dominio}`}
            className={styles.linkInvestigacion}
          >
            <section className={styles.investigacionContainer}>
              <img
                src={investigacion.imagen}
                alt={`Foto de la investigación: ${investigacion.titulo}`}
                className={styles.fotoInvestigacion}
              />
            </section>

            <section className={styles.dataContainer}>
              <h2 className={styles.tituloInvestigacion}>
                {investigacion.titulo}
              </h2>
              <p className={styles.autorxFecha}>
                Autorxs: {investigacion.autorxs} - Fecha: {investigacion.fecha}
              </p>
            </section>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TodasInvestigaciones;
