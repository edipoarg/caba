// Investigacion.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Investigacion.module.css";
import Nota14 from "../todasInvest/Nota14";

const Investigacion = () => {
  const { dominio } = useParams();
  const [investigacion, setInvestigacion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/investigaciones.json`); // Ajusta la ruta según tu estructura
        const data = await response.json();
        const investigacionSeleccionada = data.find(
          (item) => item.dominio === dominio,
        );

        if (investigacionSeleccionada) {
          setInvestigacion(investigacionSeleccionada);
        } else {
          // Manejar el caso donde no se encuentra la investigación con el dominio proporcionado
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, [dominio]);

  if (!investigacion) {
    // Puedes mostrar un mensaje de carga o redirigir a una página de error
    return <p>Cargando...</p>;
  }

  return (
    <>
      <section className={styles.investigacionContainer}>
        <img
          src={investigacion.imagen}
          alt={`Foto de la investigación: ${investigacion.titulo}`}
          className={styles.fotoInvestigacion}
        />
        <section className={styles.header}>
          <section className={styles.basicInfo}>
            <div className={styles.autorxsContainer}></div>
            <h1 className={styles.title}>{investigacion.titulo}</h1>
            <section className={styles.more}>
              <section className={styles.autorxs}>
                <h4 className={styles.autor}>{investigacion.autorxs}</h4>
                <h4 className={styles.autor}>{investigacion.ilus}</h4>
              </section>
              <h4 className={styles.date}>{investigacion.fecha}</h4>
            </section>
          </section>
        </section>
        <section className={styles.textContainer}>
          <h4 className={styles.lead}>{investigacion.textoBajada}</h4>
          <Nota14></Nota14>
        </section>
      </section>
    </>
  );
};

export default Investigacion;
