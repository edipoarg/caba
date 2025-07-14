import Icons from "../iconos/Icons";
import { Link } from "react-router-dom";
import styles from "./Recursos.module.css";
import Mapa from "../Mapa/Mapa";

const recursosItems = [
  {
    path: "institucionales",
    icon: "institucionales",
    nombre: "Recursos Institucionales",
  },
  { path: "detencion", icon: "detencion", nombre: "Ante Detención" },
  { path: "guia", icon: "guia", nombre: "Guía Básica" },
  { path: "genero", icon: "genero", nombre: "Recursos de Género" },
  { path: "migrantes", icon: "migrantes", nombre: "Recursos para Migrantes" },
  { path: "filmar", icon: "filmar", nombre: "Cómo Filmar" },
];

const Recursos = () => {
  return (
    <>
      <section className={styles.mapBlur}>
        <section className={styles.recursosContainer}>
          <section className={styles.titleContainer}>
            <div>
              <h2 className={styles.title}>RECURSOS</h2>
              <h4 className={styles.subTitle}>
                Recomendaciones <br /> para enfrentar <br />
                la violencia policial
              </h4>
              <Link to="/organizate">
                <h4 className={styles.organizate}>ORGANIZATE</h4>
              </Link>
            </div>
            <Icons
              icon={"recursos"}
              className={styles.headerIcon}
              iconSize="4rem"
            />
          </section>
          <section className={styles.recursos}>
            {recursosItems.map((recursosItem, index) => (
              <Link
                key={index}
                to={recursosItem.path}
                className={styles.recursoContainer}
              >
                <h5 className={styles.iconName}>{recursosItem.nombre}</h5>
                <Icons
                  icon={recursosItem.icon}
                  className={styles.icon}
                  iconSize="2.2rem"
                />
              </Link>
            ))}
          </section>
        </section>
      </section>

      <Mapa></Mapa>
    </>
  );
};

export default Recursos;
