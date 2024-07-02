import { Link } from "react-router-dom";
import styles from "./Ahora.module.css";
import Icons from "../iconos/Icons";

const Ahora = () => {
  const data = {
    title: "A.H.O.R.A.",
    bajada: "Archivo Histórico Orgánico de la Represión Argentina",
    info: "Es un reservorio digital de documentos fílmicos y fotográficos sobre hechos de represión ocurridos en el país. Busca detectar, reunir y resguardar de forma eficiente y segura todos los archivos para reconstruir los hechos de violencia en pos de la construcción de verdad y alcance de justicia.",
    informes: [
      {
        title: "REPORTE SOBRE EL OPERATIVO POLICIAL DEL 24 DE ENERO DE 2024",
        subtitle:
          "en el primer paro general y marcha del año convocado por la CGT: CRÓNICA DE UNA VICTORIA POPULAR",
        link: "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_997c8d0848e34476ad7040bb09b68998.pdf",
      },
      {
        title: "REPORTE SOBRE EL OPERATIVO POLICIAL DEL 12 DE JUNIO DE 2024",
        subtitle:
          "jornada de manifestación pacífica contra la aprobación de la Ley Bases: CRÓNICA DE UNA DERROTA POPULAR",
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
          title="timeline1"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1ujC1unW4bq-RwrPKS3Mh5E-BhR__ardLEj3TrBXWfSs&font=Fjalla-Average&lang=es&timenav_position=top&initial_zoom=1&height=600"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
        <iframe
          title="timeline2"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1CyVCS6vcIyl28B5ZU96CsE3ktTSOkOeG4aQ-8rm2nwo&font=Default&lang=en&initial_zoom=2&height=650"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </section>
    </section>
  );
};

export default Ahora;
