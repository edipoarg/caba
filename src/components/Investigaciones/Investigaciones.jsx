import styles from "./Investigaciones.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import MapaBlur from "../MapaBlur";
import TodasInvestigaciones from "./todasInvest/TodasInvestigaciones";
import { useState } from "react";

const tituloNotaPrincipal =
  "El método Grillo: cómo reconstruir una verdad manipulada";
const fechaUltimoReporte = "08/12/2024";
const fotoNotaPrincipal =
  "https://static.wixstatic.com/media/0f4ca0_48a8974295c84e0e9bdb33ea96ed467d~mv2.jpg/v1/fill/w_1762,h_1084,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GRILLO%20x%20nicolas%20daniluk%20-%20WEB%20MAPA%20POLI.jpg";
const fechaNotaPrincipal = "09/07/2025";
const autorxsNotaPrincipal = ["Facundo Cifelli y  Luz Conde "];
const ilusNotaPrincipal = "Nicolás Daniluk";
const numeroReporte = "Quinto";

const Investigaciones = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <>
      <div className={styles.background}></div>
      <section className={styles.investContainer}>
        <section className={styles.titleContainer}>
          <h2 className={styles.title}>INVESTIGACIONES</h2>
          <Icons
            icon={"investigaciones"}
            className={styles.headerIcon}
            iconSize="4rem"
          />

          <section className={styles.typeMenu}>
            <h3
              className={`${styles.type} ${
                activeFilter === "informe" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("informe")}
            >
              Informes
            </h3>
            <h3
              className={`${styles.type} ${
                activeFilter === "expediente" ? styles.active : ""
              }`}
              onClick={() => setActiveFilter("expediente")}
            >
              Detrás del expediente
            </h3>
            <Link to="/reportes">
              <h3 className={styles.type}>Reportes</h3>
            </Link>
          </section>
        </section>

        <section className={styles.investigaciones}>
          <section className={styles.investNovedades}>
            <Link to="/investigacion/metodo-pablo-grillo">
              <article className={styles.notaPrincipal}>
                <img
                  src={fotoNotaPrincipal}
                  alt=""
                  className={styles.fotoNotaPrincipal}
                />
                <section className={styles.infoNotaPrincipal}>
                  <h2 className={styles.tituloNotaPrincipal}>
                    {tituloNotaPrincipal}
                  </h2>
                  <section className={styles.infoBasica}>
                    <section className={styles.autorxsContainer}>
                      <div className={styles.autorxContainer}>
                        <Icons className={styles.icon} icon="autorx" />
                        <h5 className={styles.autorx}>
                          {autorxsNotaPrincipal}
                        </h5>
                      </div>
                      <div className={styles.ilusContainer}>
                        <Icons className={styles.icon} icon="ilus" />
                        <h5 className={styles.ilus}>{ilusNotaPrincipal}</h5>
                      </div>
                    </section>
                  </section>
                  <h6 className={styles.fechaContainer}>
                    {fechaNotaPrincipal}
                  </h6>
                </section>
              </article>
            </Link>
          </section>

          <section className={styles.investCol2}>
            <Link
              to="https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_b842b32fa4c4452498e07a1d8b6da1bf.pdf"
              className={styles.ultimoReporteContainer}
            >
              <img src="" alt="" className={styles.fotoUltimoReporte} />
              <section className={styles.datosReporte}>
                <h4 className={styles.fechaUltimoReporte}>
                  {fechaUltimoReporte}
                </h4>
                <h2 className={styles.tituloUltimoReporte}>
                  {numeroReporte} Reporte
                </h2>
                <h4 className={styles.subtituloUltimoReporte}>
                  de violencia policial
                </h4>
              </section>
            </Link>
            <a
              href="https://open.spotify.com/show/1fhXtCulH39aZgv9P7WH7k"
              className={styles.podcastContainer}
            >
              <section className={styles.podcast}>
                <Icons
                  icon={"podcast"}
                  className={styles.podcastIcon}
                  iconSize="2.8rem"
                />
                <h2 className={styles.tituloPodcast}>Podcast</h2>
                <div className={styles.bajadaPodcast}></div>
              </section>
            </a>
            <Link to="/autorxs" className={styles.autorxsSectionContainer}>
              <section className={styles.autorxsSection}>
                <h2 className={styles.tituloAutorxsSection}>Autorxs</h2>
              </section>
            </Link>
          </section>
        </section>
      </section>
      <TodasInvestigaciones filter={activeFilter} />
      <MapaBlur />
    </>
  );
};

export default Investigaciones;
