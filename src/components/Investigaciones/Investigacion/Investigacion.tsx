import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Investigacion.module.css";
import Nota01 from "../TodasInvest/Nota01";
import Nota02 from "../TodasInvest/Nota02";
import Nota03 from "../TodasInvest/Nota03";
import Nota04 from "../TodasInvest/Nota04";
import Nota05 from "../TodasInvest/Nota05";
import Nota06 from "../TodasInvest/Nota06";
import Nota07 from "../TodasInvest/Nota07";
import Nota08 from "../TodasInvest/Nota08";
import Nota09 from "../TodasInvest/Nota09";
import Nota10 from "../TodasInvest/Nota10";
import Nota11 from "../TodasInvest/Nota11";
import Nota12 from "../TodasInvest/Nota12";
import Nota13 from "../TodasInvest/Nota13";
import Nota14 from "../TodasInvest/Nota14";
import Nota15 from "../TodasInvest/Nota15";
import Nota16 from "../TodasInvest/Nota16";
import Nota17 from "../TodasInvest/Nota17";
import Nota18 from "../TodasInvest/Nota18";
import Nota19 from "../TodasInvest/Nota19";
import Nota20 from "../TodasInvest/Nota20";
import Nota21 from "../TodasInvest/Nota21";
import Nota22 from "../TodasInvest/Nota22";
import Nota23 from "../TodasInvest/Nota23";
import Nota24 from "../TodasInvest/Nota24";

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
  "nadie-sabe": Nota14,
  "metodo-pablo-grillo": Nota15,
  "seguridad-en-las-orillas": Nota16,
  "la-policia-de-la-limpieza": Nota17,
  "quien-las-hace": Nota18,
  "doxeo-con-placas": Nota19,
  "cuanto-vale-un-policia": Nota20,
  "portacion-de-cara": Nota21,
  "motosierra-con-balas": Nota22,
  "al-enemigo-ni-aire": Nota23,
  "el-algoritmo-te-identifico": Nota24,
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
  );
};

export default Investigacion;
