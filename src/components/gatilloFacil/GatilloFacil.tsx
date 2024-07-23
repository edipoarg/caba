import { useEffect, useState } from "react";
import styles from "./GatilloFacil.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import { CasoGatillo } from "../../models/casos";

const fetchGatilloCABA = async (): Promise<CasoGatillo[] | null> => {
  const response = await fetch("data/gatilloCaba.json");
  const data: { features: CasoGatillo[] } | undefined = await response.json();
  return data?.features ?? null;
};

const GatilloFacil = () => {
  const [cases, setCases] = useState<CasoGatillo[] | "loading" | null>(
    "loading",
  );

  useEffect(() => {
    fetchGatilloCABA()
      .then((data) => {
        setCases(data);
      })
      .catch(() => {
        setCases(null);
      });
  }, []);

  if (cases === "loading") return <p>Cargando...</p>;
  if (cases === null) return <p>Error al obtener los casos.</p>;

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
