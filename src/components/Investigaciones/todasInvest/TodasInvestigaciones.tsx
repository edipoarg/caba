/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css";
import Icons from "../../iconos/Icons";

interface Investigacion {
  id: string;
  dominio: string;
  imagen: string;
  titulo: string;
  autorxs: string[];
  ilus: string[];
  fecha: string;
  tipoInvestigacion: string;
}

type Autorx = {
  nombre: string;
  imagen: string;
  info: string;
  enlaceVer: string;
};

interface TodasInvestigacionesProps {
  filter?: string;
}

const TodasInvestigaciones: React.FC<TodasInvestigacionesProps> = ({
  filter,
}) => {
  const [investigaciones, setInvestigaciones] = useState<Investigacion[]>([]);
  const [autorxsData, setAutorxsData] = useState<
    Autorx[] | "loading" | "error"
  >("loading");

  useEffect(() => {
    fetch("/data/investigaciones.json")
      .then((response) => response.json())
      .then((data: Investigacion[]) => {
        const investigacionesInvertidas = data.reverse().slice(1);
        setInvestigaciones(investigacionesInvertidas);
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/autorxs.json")
      .then((res) => res.json())
      .then(setAutorxsData)
      .catch(() => setAutorxsData("error"));
  }, []);

  const getAutorxByEnlaceVer = (enlaceVer: string) =>
    autorxsData !== "loading" && autorxsData !== "error"
      ? autorxsData.find((a) => a.enlaceVer === enlaceVer)
      : undefined;

  const NombreLink = ({ enlaceVer }: { enlaceVer: string }) => {
    const autorx = getAutorxByEnlaceVer(enlaceVer);
    if (!autorx) return <span>{enlaceVer}</span>;
    return <Link to={autorx.enlaceVer}>{autorx.nombre}</Link>;
  };

  const filteredInvestigaciones = filter
    ? investigaciones.filter(
        (investigacion) =>
          investigacion.tipoInvestigacion === filter.toLowerCase(),
      )
    : investigaciones;

  if (autorxsData === "loading") return <div>Cargando autorxs...</div>;
  if (autorxsData === "error") return <div>Error cargando autorxs.</div>;

  return (
    <div className={styles.todasContainer}>
      {filteredInvestigaciones.map((investigacion) => (
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
            <div className={styles.autorxContainer}>
              <Icons className={styles.icon} icon="autorx" iconSize="medium" />
              <h5 className={styles.autorx}>
                {investigacion.autorxs &&
                  investigacion.autorxs.map((enlaceVer, idx) => (
                    <span key={enlaceVer}>
                      <NombreLink enlaceVer={enlaceVer} />
                      {idx < investigacion.autorxs.length - 1 && ", "}
                    </span>
                  ))}
              </h5>
            </div>
            <div className={styles.ilusContainer}>
              <Icons className={styles.icon} icon="ilus" iconSize="medium" />
              <h5 className={styles.ilus}>
                {investigacion.ilus &&
                  investigacion.ilus.map((enlaceVer, idx) => (
                    <span key={enlaceVer}>
                      <NombreLink enlaceVer={enlaceVer} />
                      {idx < investigacion.ilus.length - 1 && ", "}
                    </span>
                  ))}
              </h5>
            </div>
            <h4 className={styles.autorxFecha}>{investigacion.fecha}</h4>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default TodasInvestigaciones;
