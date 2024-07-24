import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Autorxs.module.css";
import { Autor } from "../../../models/autorxs";

const fetchAutorxs = async (): Promise<Autor[] | null> => {
  const response = await fetch("data/autorxs.json");
  const data: Autor[] = await response.json();
  return data;
};

const Autorxs = () => {
  const [autorxsData, setAutorxsData] = useState<"error" | "loading" | Autor[]>(
    "loading",
  );

  useEffect(() => {
    fetchAutorxs()
      .then((autorxs) => {
        if (autorxs === null) {
          setAutorxsData("error");
          return;
        }
        setAutorxsData(autorxs);
      })
      .catch(() => {
        setAutorxsData("error");
      });
  }, []);

  if (autorxsData === "error") return <div>Error buscando autorxs</div>;
  if (autorxsData === "loading") return <div>Cargando...</div>;

  return (
    <section className={styles.container}>
      <section className={styles.titleContainer}>
        <h2 className={styles.title}>Autorxs</h2>
      </section>
      <section className={styles.autorxsContainer}>
        {autorxsData.map((autorx, index) => (
          <div className={styles.autorContainer} key={index}>
            <img
              src={autorx.imagen}
              alt={`Foto de ${autorx.nombre}`}
              className={styles.autorImagen}
            />
            <h2 className={styles.autorNombre}>{autorx.nombre}</h2>
            <Link to={autorx.enlaceVer} className={styles.verEnlace}>
              Ver
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Autorxs;
