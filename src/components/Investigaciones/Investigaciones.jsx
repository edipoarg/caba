import styles from "./Investigaciones.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import MapaBlur from "../MapaBlur";
import TodasInvestigaciones from "./todasInvest/TodasInvestigaciones";

const tituloNotaPrincipal = "Trans, migrante y peligrosa";
const fechaUltimoReporte = "08/05/2024";
const fotoNotaPrincipal =
  "https://static.wixstatic.com/media/0f4ca0_f251793ed7094671bfbee7daf0ddec04~mv2.jpg/v1/fill/w_1211,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TRANS%20MIGRANTE%20x%20Nicol%C3%A1s%20Daniluk%20-%20WEB%20MAPA%20(1).jpg";
const fechaNotaPrincipal = "29/03/2022";
const autorxsNotaPrincipal = " Elisa Corso";
const ilusNotaPrincipal = "Nicolás Daniluk";
const numeroReporte = "Cuarto";

const Investigaciones = () => {
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
            <h3 className={styles.type}>Informes</h3>
            <h3 className={styles.type}>Detrás del expediente</h3>
            <h3 className={styles.type}>Reportes</h3>
          </section>
        </section>

        <section className={styles.investigaciones}>
          <section className={styles.investNovedades}>
            <Link to="/investigacion/trans-migrante">
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
            <Link to="/reportes" className={styles.ultimoReporteContainer}>
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
      <TodasInvestigaciones />
      <MapaBlur />
    </>
  );
};

export default Investigaciones;
