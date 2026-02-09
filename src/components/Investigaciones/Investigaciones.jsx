import styles from "./Investigaciones.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import MapaBlur from "../MapaBlur";
import TodasInvestigaciones from "./todasInvest/TodasInvestigaciones";
import { useState } from "react";

const tituloNotaPrincipal =
  "Motosierra con balas: la política que mató a Juan Gabriel";
const fechaUltimoReporte = "Febrero 2026";
const fotoNotaPrincipal =
  "https://static.wixstatic.com/media/0f4ca0_e40832bf6e934b57957d16eb9a1b9bb0~mv2.jpg/v1/fill/w_1918,h_1198,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/LUGANO%20x%20Daniluk%20-%20WEB%20MAPA%20POLI.jpg";
const fechaNotaPrincipal = "9/02/2025";
const autorxsNotaPrincipal = "Mapa de la Policía";
const ilusNotaPrincipal = "Nicolás Daniluk";
const numeroReporte = "6to";

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
            <Link to="/investigacion/motosierra-con-balas">
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
            <Link to="/sexto-reporte" className={styles.ultimoReporteContainer}>
              <img
                src="https://static.wixstatic.com/media/0f4ca0_d63db55bd041494a87cfcd6bc25b1110~mv2.jpg/v1/fill/w_1536,h_1024,al_c,q_85,enc_avif,quality_auto/portada%20reporte.jpg"
                alt=""
                className={styles.fotoUltimoReporte}
              />
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
