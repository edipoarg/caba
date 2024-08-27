import { useContext } from "react";
import styles from "./GatilloFacil.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import { CasosGatilloContext } from "../../routes/Root";

const GatilloFacil = () => {
  const casesData = useContext(CasosGatilloContext);

  if (casesData === "loading") return <p>Cargando...</p>;
  if (casesData === null) return <p>Error al obtener los casos.</p>;
  const cases = casesData.features;

  return (
    <>
      <section className={styles.gatilloContainer}>
        <section className={styles.header}>
          <h4 className={styles.title}>Gatillo Fácil ({cases.length} casos)</h4>
          <Icons
            icon={"reportes"}
            className={styles.headerIcon}
            iconSize="4rem"
          />
        </section>
        <section className={styles.listContainer}>
          <ul className={styles.list}>
            {cases.map((feature, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.itemFullData}>
                  <h3 className={styles.itemName}>
                    {feature.properties.Nombre}
                  </h3>
                  <h3 className={styles.itemData}>
                    {feature.properties.Edad} años{" "}
                  </h3>
                  <h3 className={styles.itemData}>
                    {feature.properties.Fecha}
                  </h3>
                </div>
                <Link to={`/ficha/${feature.properties.Contador}`}>
                  <h3 className={styles.moreButton}>Ver</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default GatilloFacil;
