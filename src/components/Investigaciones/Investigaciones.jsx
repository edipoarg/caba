import styles from "./Investigaciones.module.css";
import Temas from "../Temas";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import Mapa from "../Mapa";

const tituloNotaPrincipal =
  "La bonaerense en la mira: de una internación psiquiátrica a un doble femicidio";
const fechaUltimoReporte = "27/09/2023";
const fotoNotaPrincipal =
  "https://static.wixstatic.com/media/0f4ca0_8720002caf4347e986b0913169d7bfdc~mv2.jpg/v1/fill/w_1211,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Crisis_salud_Mental_Mapa3.jpg";
const fechaNotaPrincipal = "08/05/2024";
const autorxsNotaPrincipal = " Julia Pascolini";
const ilusNotaPrincipal = "Panchopepe";
const numeroReporte = "Tercer";

const Investigaciones = () => {
  return (
    <>
      <div className={styles.mapBlur}>
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
              <Link to="/investigacion/bonaerense-mira">
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
              <section
                style={Temas.reportesTema}
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
              </section>
              <a
                href="https://open.spotify.com/show/1fhXtCulH39aZgv9P7WH7k"
                style={Temas.investTema}
                className={styles.podcastContainer}
              >
                <section style={Temas.investTema} className={styles.podcast}>
                  <h2 className={styles.tituloPodcast}>Podcast</h2>
                  <div className={styles.bajadaPodcast}>
                    <h5 className={styles.play}>ir</h5>
                  </div>
                </section>
              </a>
              <section className={styles.investMore}>
                <Link
                  to="/autorxs"
                  style={Temas.investTema}
                  className={styles.autorxsSectionContainer}
                >
                  <section
                    style={Temas.investTema}
                    className={styles.autorxsSection}
                  >
                    <h2 className={styles.tituloAutorxsSection}>Autorxs</h2>
                    <div></div>
                  </section>
                </Link>
                <Link to="/lista" className={styles.todasLinkContainer}>
                  <section
                    style={Temas.investTema}
                    className={styles.todasLink}
                  >
                    <h5 className={styles.flecha}>Todas</h5>
                  </section>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </div>
      <Mapa></Mapa>
    </>
  );
};

export default Investigaciones;
