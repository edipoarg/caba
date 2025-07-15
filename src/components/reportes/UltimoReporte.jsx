import ReportesIcon from "./ReportesIcon";
import styles from "./Reportes.module.css";

export default function UltimoReporte({ reporte }) {
  if (!reporte) return null;

  return (
    <section className={styles.ultimoReporteBlock}>
      <button className={styles.ultimoReporteBtn}>
        <ReportesIcon type="folder" className={styles.iconLarge} />
        <h2>{reporte.titulo}</h2>

        <p>
          <strong>Cantidad de casos relevados: </strong>
          {reporte.cantidadCasosRelevados ?? "No disponible"}
        </p>

        {reporte.casosSingulares?.length > 0 && (
          <div className={styles.detailsList}>
            <h4>Casos singulares:</h4>
            <ul>
              {reporte.casosSingulares.map((c, i) => (
                <li key={i}>{c.titulo}</li>
              ))}
            </ul>
          </div>
        )}

        {reporte.casoSistematico?.titulo && (
          <p className={styles.detailItem}>
            <strong>Caso sistemático: </strong>
            {reporte.casoSistematico.titulo}
          </p>
        )}
        {reporte.casoPolitico?.titulo && (
          <p className={styles.detailItem}>
            <strong>Caso político: </strong>
            {reporte.casoPolitico.titulo}
          </p>
        )}
      </button>
    </section>
  );
}
