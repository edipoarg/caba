import ReportesIcon from "./ReportesIcon";
import styles from "./ReportesAnteriores.module.css";

export default function ReportesAnteriores({ lista }) {
  if (!lista?.length) return null;

  return (
    <section className={styles.block}>
      <h3>Reportes anteriores</h3>
      <ul className={styles.list}>
        {lista.map((r) => (
          <li key={r.id} className={styles.item}>
            <ReportesIcon type="folder" />
            <span>{r.titulo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
