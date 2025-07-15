import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import Nota14 from "../todasInvest/Nota14";
import Nota15 from "../todasInvest/Nota15";

interface InvestigacionModel {
  id: string;
  dominio: string;
  imagen: string;
  titulo: string;
  autorxs: string[];
  ilus: string[];
  fecha: string;
  textoBajada: string;
  tipoInvestigacion: string;
}

type Autorx = {
  nombre: string;
  imagen: string;
  info: string;
  enlaceVer: string;
};

const componentesNotas: { [key: string]: React.FC<unknown> } = {
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
};

const Investigacion = () => {
  const { dominio } = useParams<{ dominio?: string }>();
  const [investigacion, setInvestigacion] = useState<
    InvestigacionModel | null | "loading"
  >("loading");
  const [autorxsData, setAutorxsData] = useState<
    Autorx[] | "loading" | "error"
  >("loading");

  useEffect(() => {
    if (!dominio) {
      setInvestigacion(null);
      return;
    }
    fetch("/data/investigaciones.json")
      .then((res) => res.json())
      .then((data: InvestigacionModel[]) => {
        const encontrada = data.find((item) => item.dominio === dominio);
        setInvestigacion(encontrada || null);
      })
      .catch(() => setInvestigacion(null));
  }, [dominio]);

  useEffect(() => {
    fetch("/data/autorxs.json")
      .then((r) => r.json())
      .then(setAutorxsData)
      .catch(() => setAutorxsData("error"));
  }, []);

  if (investigacion === "loading" || autorxsData === "loading")
    return <p>Cargando...</p>;
  if (investigacion === null) return <p>Error al obtener la investigación</p>;
  if (autorxsData === "error") return <p>Error cargando autorxs.</p>;

  const getAutorxByEnlaceVer = (enlaceVer: string) =>
    (autorxsData as Autorx[]).find((a) => a.enlaceVer === enlaceVer);

  const NombreLink = ({ enlaceVer }: { enlaceVer: string }) => {
    const autorx = getAutorxByEnlaceVer(enlaceVer);
    if (!autorx) return <span>{enlaceVer}</span>;
    return (
      <Link to={autorx.enlaceVer} className={styles.autorxLink}>
        {autorx.nombre}
      </Link>
    );
  };

  const autorxs = Array.isArray(investigacion.autorxs)
    ? investigacion.autorxs
    : [investigacion.autorxs];
  const ilustradorxs = Array.isArray(investigacion.ilus)
    ? investigacion.ilus
    : [investigacion.ilus];

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
                <h4 className={styles.autor}>
                  {autorxs.map((enlaceVer, idx) => (
                    <span key={enlaceVer}>
                      <NombreLink enlaceVer={enlaceVer} />
                      {idx < autorxs.length - 1 && ", "}
                    </span>
                  ))}
                </h4>
                <h4 className={styles.autor}>
                  {ilustradorxs.map((enlaceVer, idx) => (
                    <span key={enlaceVer}>
                      <NombreLink enlaceVer={enlaceVer} />
                      {idx < ilustradorxs.length - 1 && ", "}
                    </span>
                  ))}
                </h4>
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
