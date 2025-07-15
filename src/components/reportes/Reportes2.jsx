import { useEffect, useState } from "react";
import styles from "./Reportes.module.css";

const Icon = ({ type, className }) => {
  switch (type) {
    case "video":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
      );
    case "file":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
        </svg>
      );
    case "folder":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
        </svg>
      );
    default:
      return null;
  }
};

const Reportes = () => {
  const [reportes, setReportes] = useState(null);
  const [reconstrucciones, setReconstrucciones] = useState(null);
  const [informesPDF, setInformesPDF] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/data/informes.json").then((res) => res.json()),
      fetch("/data/reconstrucciones.json").then((res) => res.json()),
      fetch("/data/informesPDF.json").then((res) => res.json()),
    ])
      .then(([reportesData, reconstruccionesData, informesPDFData]) => {
        setReportes(reportesData.reportes);
        setReconstrucciones(reconstruccionesData.reconstrucciones);
        setInformesPDF(informesPDFData.informes);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los datos.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  if (!reportes || reportes.length === 0)
    return <p>No hay reportes disponibles.</p>;

  const sortedReportes = [...reportes].sort((a, b) => a.id - b.id);
  const ultimoReporte = sortedReportes[sortedReportes.length - 1];
  const reportesAnteriores = sortedReportes.slice(0, -1);

  const ultimaReconstruccion = reconstrucciones
    ? reconstrucciones[reconstrucciones.length - 1]
    : null;

  return (
    <div className={styles.gridContainer}>
      {/* Cada bloque tiene class con nombre de área grid */}
      <section className={styles.ultimoReporteBlock}>
        <button className={styles.ultimoReporteBtn}>
          <Icon type="folder" className={styles.iconLarge} />
          <h2>{ultimoReporte.titulo}</h2>
          <p>
            <strong>Cantidad de casos relevados: </strong>
            {ultimoReporte.cantidadCasosRelevados ?? "No disponible"}
          </p>
          {ultimoReporte.casosSingulares &&
            ultimoReporte.casosSingulares.length > 0 && (
              <div className={styles.detailsList}>
                <h4>Casos singulares:</h4>
                <ul>
                  {ultimoReporte.casosSingulares.map((caso, i) => (
                    <li key={i}>{caso.titulo}</li>
                  ))}
                </ul>
              </div>
            )}
          {ultimoReporte.casoSistematico?.titulo && (
            <p className={styles.detailItem}>
              <strong>Caso sistemático: </strong>
              {ultimoReporte.casoSistematico.titulo}
            </p>
          )}
          {ultimoReporte.casoPolitico?.titulo && (
            <p className={styles.detailItem}>
              <strong>Caso político: </strong>
              {ultimoReporte.casoPolitico.titulo}
            </p>
          )}
        </button>
      </section>

      <section className={styles.reportesAnterioresBlock}>
        <h3>Reportes anteriores</h3>
        <ul className={styles.ficherosList}>
          {reportesAnteriores.map((reporte) => (
            <li key={reporte.id} className={styles.ficheroItem}>
              <Icon type="folder" className={styles.iconSmall} />
              <span>{reporte.titulo}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.reconstruccionesBlock}>
        <h3>Última reconstrucción</h3>
        {ultimaReconstruccion && (
          <div className={styles.reconstruccionItem}>
            <Icon type="video" className={styles.iconSmall} />
            <div>
              <h4>{ultimaReconstruccion.titulo}</h4>
              <p>{ultimaReconstruccion.descripcion}</p>
              <a
                href={ultimaReconstruccion.linkVideo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Ver más
              </a>
            </div>
          </div>
        )}
      </section>

      <section className={styles.informesPDFBlock}>
        <h3>Informes de investigación</h3>
        {informesPDF && informesPDF.length > 0 ? (
          <ul className={styles.informesPDFList}>
            {informesPDF.map((informe) => (
              <li key={informe.id} className={styles.informePDFItem}>
                <Icon type="file" className={styles.iconSmall} />
                <a
                  href={informe.linkPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{informe.titulo}</h4>
                  <p>{informe.bajada}</p>
                  <span className={styles.informeDate}>{informe.fecha}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay informes disponibles.</p>
        )}
      </section>
    </div>
  );
};

export default Reportes;
