import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Investigacion.module.css";
import Nota01 from "../todasInvest/Nota01";
import Nota02 from "../todasInvest/Nota02";
import Nota03 from "../todasInvest/Nota03";
import Nota04 from "../todasInvest/Nota04";
import Nota05 from "../todasInvest/Nota05";
import Nota06 from "../todasInvest/Nota06";
import Nota07 from "../todasInvest/Nota07";
import Nota08 from "../todasInvest/Nota08";
import Nota09 from "../todasInvest/Nota09";
import Nota10 from "../todasInvest/Nota10";
import Nota11 from "../todasInvest/Nota11";
import Nota12 from "../todasInvest/Nota12";
import Nota13 from "../todasInvest/Nota13";

const Investigacion = () => {
  const { dominio } = useParams();
  const [investigacion, setInvestigacion] = useState(null);

  const componentesNotas = {
    "breve-historia": Nota01,
    "gatillo-38-casos": Nota02,
    "tu-cara-me-suena": Nota03,
    "lucas-gonzalez": Nota04,
    arshak: Nota05,
    metropolitana: Nota06,
    "toma-de-escuelas": Nota07,
    "policia-parte": Nota08,
    "tiro-descarga": Nota09,
    "de-la-calle": Nota10,
    "sin-noticias-cuarto": Nota11,
    "a-el-lo-baleo": Nota12,
    "trans-migrante": Nota13,
  };

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
          setInvestigacion(null); // o podrías redirigir a una página de error
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

  // Obtener el componente correspondiente basado en el dominio
  const ComponenteNota = componentesNotas[dominio];

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
          {ComponenteNota ? (
            <ComponenteNota />
          ) : (
            <p>Investigación no encontrada.</p>
          )}
        </section>
      </section>
    </>
  );
};

export default Investigacion;
