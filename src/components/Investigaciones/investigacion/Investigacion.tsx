import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Investigacion.module.css";
import Nota14 from "../todasInvest/Nota14";
import { Investigacion as InvestigacionModel } from "../../../models/investigacion";
import { fetchInvestigacionByDominio } from "../../../data/fetching";

const Investigacion = () => {
  const { dominio } = useParams();
  const [investigacion, setInvestigacion] = useState<
    InvestigacionModel | null | "loading"
  >("loading");

  useEffect(() => {
    if (dominio !== undefined)
      fetchInvestigacionByDominio(dominio)
        .then(setInvestigacion)
        .catch(() => {
          setInvestigacion(null);
        });
  }, [dominio]);

  if (investigacion === null) {
    return <p>Error al obtener la investigación</p>;
  }
  if (investigacion === "loading") return <p>Cargando...</p>;

  return (
    <>
      <section className={styles.investigacionContainer}>
        <section className={styles.header}>
          <img
            src={investigacion.imagen}
            alt={`Foto de la investigación: ${investigacion.titulo}`}
            className={styles.fotoInvestigacion}
          />
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
            <h4 className={styles.lead}>{investigacion.textoBajada}</h4>
          </section>
        </section>
        <section className={styles.textContainer}>
          <Nota14 />
        </section>
      </section>
    </>
  );
};

export default Investigacion;
