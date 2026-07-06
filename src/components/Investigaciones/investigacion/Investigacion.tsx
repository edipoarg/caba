import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Investigacion.module.css";
import { fetchInvestigacionByDominio } from "../../../data/fetching";
import type { Investigacion as InvestigacionType } from "../../../models/investigacion";

const Investigacion = () => {
  const { dominio } = useParams<{ dominio?: string }>();

  const [investigacion, setInvestigacion] = useState<
    InvestigacionType | null | "loading"
  >("loading");

  useEffect(() => {
    if (!dominio) {
      setInvestigacion(null);
      return;
    }

    const fetchData = async () => {
      try {
        const investigacionSeleccionada =
          await fetchInvestigacionByDominio(dominio);

        setInvestigacion(investigacionSeleccionada ?? null);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setInvestigacion(null);
      }
    };

    fetchData();
  }, [dominio]);

  if (investigacion === null) {
    return <p>Error al obtener la investigación</p>;
  }

  if (investigacion === "loading") {
    return <p>Cargando...</p>;
  }

  return (
    <section className={styles.investigacionContainer}>
      <section className={styles.header}>
        <img
          src={investigacion.imagen}
          alt={`Foto de la investigación: ${investigacion.titulo}`}
          className={styles.fotoInvestigacion}
        />

        <section className={styles.basicInfo}>
          <h1 className={styles.title}>{investigacion.titulo}</h1>

          <section className={styles.more}>
            <h4 className={styles.date}>{investigacion.fecha}</h4>
          </section>

          <h4 className={styles.lead}>{investigacion.textoBajada}</h4>
        </section>
      </section>

      <section
        className={styles.textContainer}
        dangerouslySetInnerHTML={{ __html: investigacion.Notes }}
      />
    </section>
  );
};

export default Investigacion;