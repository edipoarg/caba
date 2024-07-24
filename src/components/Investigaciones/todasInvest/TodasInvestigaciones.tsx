import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css"; // Ajusta la ruta según sea necesario
import { Investigacion } from "../../../models/investigacion";

const fetchInvestigaciones = async (): Promise<Investigacion[] | null> => {
  const response = await fetch(`/data/investigaciones.json`);
  const data: Investigacion[] = await response.json();
  return data;
};

const TodasInvestigaciones = () => {
  const [investigaciones, setInvestigaciones] = useState<
    Investigacion[] | null | "loading"
  >("loading");

  useEffect(() => {
    fetchInvestigaciones()
      .then((data) => setInvestigaciones(data))
      .catch(() => setInvestigaciones(null));
  }, []);

  if (investigaciones === null) return <p>Error al cargar los datos.</p>;
  if (investigaciones === "loading") return <p>Cargando...</p>;

  return (
    <>
      <div className={styles.todasContainer}>
        {investigaciones.map((investigacion) => (
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
              <p className={styles.autorxFecha}>
                Autorxs: {investigacion.autorxs} - Fecha: {investigacion.fecha}
              </p>
            </section>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TodasInvestigaciones;
