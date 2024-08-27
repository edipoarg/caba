import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css";
import Icons from "../../iconos/Icons";

// eslint-disable-next-line react/prop-types
const TodasInvestigaciones = ({ filter }) => {
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

  const filteredInvestigaciones = filter
    ? investigaciones.filter(
        (investigacion) =>
          // eslint-disable-next-line react/prop-types
          investigacion.tipoInvestigacion === filter.toLowerCase(),
      )
    : investigaciones;

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
              <Icons className={styles.icon} icon="autorx" />
              <h5 className={styles.autorx}> {investigacion.autorxs}</h5>
            </div>
            <div className={styles.ilusContainer}>
              <Icons className={styles.icon} icon="ilus" />
              <h5 className={styles.ilus}> {investigacion.ilus}</h5>
            </div>
            <h4 className={styles.autorxFecha}>{investigacion.fecha}</h4>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default TodasInvestigaciones;
