import ReportesIcon from "./ReportesIcon";
import styles from "./InformesPDF.module.css";

export default function InformesPDF({ informes }) {
  if (!informes?.length) return null;

  return (
    <section className={styles.informesPDFBlock}>
      <h3>Informes</h3>
      <ul className={styles.informesPDFList}>
        {informes.map(inf => (
          <li key={inf.id} className={styles.informePDFItem}>
            <ReportesIcon type="file" />
            <a href={inf.linkPDF} target="_blank" rel="noopener noreferrer">
              <h4>{inf.titulo}</h4>
              <p>{inf.bajada}</p>
              <span className={styles.informeDate}>{inf.fecha}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
