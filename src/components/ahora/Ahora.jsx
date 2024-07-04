import { Link } from "react-router-dom";
import styles from "./Ahora.module.css";
import Icons from "../iconos/Icons";

const Ahora = () => {
  const data = {
    title: "A.H.O.R.A.",
    bajada: "Archivo Histórico Orgánico de la Represión Argentina",
    info: "Es un reservorio digital de documentos fílmicos y fotográficos sobre hechos de represión ocurridos en el país. Nos proponemos almacenar y resguardar de forma eficiente y segura las imágenes recolectadas, para reconstruir a través del análisis colectivo la violencia estatal, con la intención de aportar a la producción de verdad histórica y la búsqueda de justicia.",
    informes: [
      {
        title: "REPORTE SOBRE EL OPERATIVO POLICIAL DEL 24 DE ENERO DE 2024",
        subtitle:
          "CRÓNICA DE UNA VICTORIA POPULAR. Paro general y movilización convocada por la CGT.",
        link: "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_997c8d0848e34476ad7040bb09b68998.pdf",
      },
      {
        title: "REPORTE SOBRE EL OPERATIVO POLICIAL DEL 12 DE JUNIO DE 2024",
        subtitle:
          "CRÓNICA DE UNA DERROTA POPULAR. Manifestación en contra de la Ley Bases.",
        link: "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_d2f36b64c1e14921bc308a87ec20d8bc.pdf",
      },
    ],
  };

  return (
    <section className={styles.ahora}>
      <section className={styles.column}>
        <section className={styles.header}>
          <Icons icon={"AHORA"} className={styles.headerIcon} iconSize="3rem" />
          <h2 className={styles.title}>{data.title}</h2>
          <h4 className={styles.bajada}>{data.bajada}</h4>
          <h5 className={styles.info}>{data.info}</h5>
        </section>
        <section className={styles.informes}>
          {data.informes.map((informe, index) => (
            <div key={index} className={styles.informe}>
              <h3 className={styles.informeTitle}>{informe.title}</h3>
              <h4 className={styles.informeSub}>{informe.subtitle}</h4>
              <Link className={styles.link} to={informe.link}>
                Ver
              </Link>
            </div>
          ))}
        </section>
      </section>
      <section className={styles.timeline}>
        <iframe
          className={styles.iframe}
          title="timeline2"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1CyVCS6vcIyl28B5ZU96CsE3ktTSOkOeG4aQ-8rm2nwo&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </section>
    </section>
  );
};

export default Ahora;
