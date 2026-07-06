import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css";
import { fetchInvestigaciones } from "../../../data/fetching";
import type { Investigacion } from "../../../models/investigacion";

interface TodasInvestigacionesProps {
  filter?: string;
}

const TodasInvestigaciones: React.FC<TodasInvestigacionesProps> = ({
  filter,
}) => {
  const [investigaciones, setInvestigaciones] = useState<Investigacion[]>([]);

  useEffect(() => {
    const loadInvestigaciones = async () => {
      try {
        const data = await fetchInvestigaciones();
        if (!data) return;

        const todasMenosLaPrincipal = [...data].reverse().slice(1);

        setInvestigaciones(todasMenosLaPrincipal);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    loadInvestigaciones();
  }, []);

  const filteredInvestigaciones = filter
    ? investigaciones.filter(
        (investigacion) =>
          investigacion.tipoInvestigacion === filter.toLowerCase(),
      )
    : investigaciones;

  return (
    <div className={styles.todasContainer}>
      {filteredInvestigaciones.map((investigacion) => (
        <Link
          key={investigacion.Id}
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

            <h4 className={styles.autorxFecha}>{investigacion.fecha}</h4>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default TodasInvestigaciones;