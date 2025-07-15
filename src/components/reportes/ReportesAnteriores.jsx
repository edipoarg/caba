import ReportesIcon from "./ReportesIcon";
import styles from "./Reportes.module.css";

export default function ReportesAnteriores({ lista }) {
  if (!lista?.length) return null;

  return (
    <section className={styles.reportesAnterioresBlock}>
      <h3>Reportes anteriores</h3>
      <ul className={styles.ficherosList}>
        {lista.map(r => (
          <li key={r.id} className={styles.ficheroItem}>
            <ReportesIcon type="folder" />
            <span>{r.titulo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
