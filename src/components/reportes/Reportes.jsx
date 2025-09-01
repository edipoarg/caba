import styles from "./Reportes.module.css";
import { Link } from "react-router-dom";

const reportes = [
  {
    id: 6,
    titulo: "Sexto reporte de violencia policial",
    fecha: "agosto de 2025",
    portada:
      "https://static.wixstatic.com/media/0f4ca0_d63db55bd041494a87cfcd6bc25b1110~mv2.jpg/v1/fill/w_1536,h_1024,al_c,q_85,enc_avif,quality_auto/portada%20reporte.jpg",
    partes: [
      { titulo: " Filmar aunque les duela" },
      { titulo: " Las razias de Jorge Macri" },
      {
        titulo:
          " Sobre la reforma de las Leyes Orgánicas de las fuerzas de seguridad federales.",
      },
    ],
  },
  {
    id: 5,
    titulo: "Quinto reporte de violencia policial",
    fecha: "15 de diciembre de 2024",
    urlReporte:
      "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_b842b32fa4c4452498e07a1d8b6da1bf.pdf",
  },
  {
    id: 4,
    titulo: "Cuarto reporte de violencia policial",
    fecha: "20 de marzo de 2024",
    urlReporte: "/#/cuarto-reporte",
  },
  {
    id: 3,
    titulo: "Tercer reporte de violencia policial",
    fecha: "5 de septiembre de 2023",
    urlReporte: "/",
  },
  {
    id: 2,
    titulo: "Segundo reporte de violencia policial",
    fecha: "10 de abril de 2023",
    urlReporte:
      "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_6268967fbc1c42af9956949a86e15583.pdf",
  },
  {
    id: 1,
    titulo: "Primer reporte de violencia policial",
    fecha: "1 de diciembre de 2022",
    urlReporte:
      "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_0b800c95b49047019dbb7f00c2ed689c.pdf",
  },
];

const Reportes = () => {
  const principal = reportes[0];
  const anteriores = reportes.slice(1);

  return (
    <section className={styles.reportesSection}>
      <div className={styles.principalContainer}>
        <div className={styles.textContainer}>
          <Link to="/sexto-reporte" className={styles.linkPrincipal}>
            <h2 className={styles.tituloPrincipal}>{principal.titulo}</h2>
            <p className={styles.fechaPrincipal}>{principal.fecha}</p>
          </Link>

          <div className={styles.partesContainer}>
            {principal.partes.map((parte, i) => (
              <Link
                key={i}
                to={`/sexto-reporte#parte-${i + 1}`}
                className={styles.parteButton}
              >
                {parte.titulo}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/sexto-reporte" className={styles.imagenContainer}>
          <img
            src={principal.portada}
            alt={`Portada del ${principal.titulo}`}
            className={styles.portada}
          />
        </Link>
      </div>

      <div className={styles.anterioresContainer}>
        {anteriores.map(({ id, titulo, fecha, urlReporte }) => (
          <div key={id} className={styles.reporteAnterior}>
            <h4 className={styles.tituloAnterior}>{titulo}</h4>
            <p className={styles.fechaAnterior}>{fecha}</p>
            <a
              href={urlReporte}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonPdf}
            >
              Ver PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reportes;
