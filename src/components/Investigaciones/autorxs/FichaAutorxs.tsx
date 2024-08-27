import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./FichaAutorxs.module.css";
import { Autor } from "../../../models/autorxs";
import { fetchAutor } from "../../../data/fetching";

const FichaAutorxs = () => {
  const { enlaceVer } = useParams(); // Usa el nombre del parámetro de la URL
  const [autor, setAutor] = useState<"loading" | null | Autor>("loading");

  useEffect(() => {
    enlaceVer &&
      fetchAutor(enlaceVer)
        .then(setAutor)
        .catch(() => setAutor(null));
  }, [enlaceVer]);

  if (enlaceVer === undefined)
    return <div>Error: identificador de autor no reconocido</div>;
  if (autor === null) {
    return <div>Autor no encontrado</div>;
  }
  if (autor === "loading") {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.fichaAutorxs}>
      <section className={styles.header}>
        <img
          className={styles.img}
          src={autor.imagen}
          alt={`Foto de ${autor.nombre}`}
        />
        <div className={styles.headerData}>
          <h3 className={styles.title}>{autor.nombre}</h3>
          <h5 className={styles.data}>{autor.info}</h5>
        </div>
      </section>
      <h3 className={styles.line}>
        ______________________________________________
      </h3>
    </div>
  );
};

export default FichaAutorxs;
