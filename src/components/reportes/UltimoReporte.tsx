import ReportesIcon from "./ReportesIcon";
import styles from "./UltimoReporte.module.css";

interface CasoBreve {
  titulo: string;
}

interface Reporte {
  id: number;
  titulo: string;
  pdf: string;
  cantidadCasosRelevados?: number;
  casosSingulares?: CasoBreve[];
  casoSistematico?: CasoBreve;
  casoPolitico?: CasoBreve;
}

interface Props {
  reporte: Reporte | null;
}

export default function UltimoReporte({ reporte }: Props) {
  if (!reporte) return null;

  const casosSingulares = reporte.casosSingulares ?? [];

  return (
    <section className={styles.block}>
      {/* Enlace con apariencia de botón */}
      <a
        href={reporte.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        <ReportesIcon type="folder" className={styles.iconLarge} />

        <h2>{reporte.titulo}</h2>

        <p>
          <strong>Cantidad de casos relevados: </strong>
          {reporte.cantidadCasosRelevados ?? "No disponible"}
        </p>

        {casosSingulares.length > 0 && (
          <div className={styles.detailsList}>
            <h4>Casos singulares:</h4>
            <ul>
              {casosSingulares.map((c, i) => (
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
      </a>
    </section>
  );
}
