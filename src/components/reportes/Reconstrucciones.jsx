import ReportesIcon from "./ReportesIcon";
import styles from "./Reportes.module.css";

export default function Reconstrucciones({ item }) {
  if (!item) return null;

  return (
    <section className={styles.reconstruccionesBlock}>
      <h3>Última reconstrucción</h3>
      <div className={styles.reconstruccionItem}>
        <ReportesIcon type="video" />
        <div>
          <h4>{item.titulo}</h4>
          <p>{item.descripcion}</p>
          <a
            href={item.linkVideo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}
