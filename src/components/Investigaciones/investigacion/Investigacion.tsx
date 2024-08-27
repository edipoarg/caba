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

interface InvestigacionModel {
  id: string;
  dominio: string;
  imagen: string;
  titulo: string;
  autorxs: string;
  ilus: string;
  fecha: string;
  textoBajada: string;
  tipoInvestigacion: string;
}

type ComponentesNotas = {
  [key: string]: React.FC<unknown>;
};

const componentesNotas: ComponentesNotas = {
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

const Investigacion = () => {
  const { dominio } = useParams<{ dominio?: string }>();
  const [investigacion, setInvestigacion] = useState<
    InvestigacionModel | null | "loading"
  >("loading");

  useEffect(() => {
    if (!dominio) {
      setInvestigacion(null); // Redirigir o manejar la ausencia de dominio
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`/data/investigaciones.json`);
        const data: InvestigacionModel[] = await response.json();
        const investigacionSeleccionada = data.find(
          (item) => item.dominio === dominio,
        );

        if (investigacionSeleccionada) {
          setInvestigacion(investigacionSeleccionada);
        } else {
          setInvestigacion(null);
        }
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
  if (investigacion === "loading") return <p>Cargando...</p>;

  // Verifica si dominio es una clave en componentesNotas
  const ComponenteNota = dominio ? componentesNotas[dominio] || null : null;

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
