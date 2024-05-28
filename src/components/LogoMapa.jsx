import styles from "../styles/LogoMapa.module.css";
import { Link } from "react-router-dom";

const LogoMapa = () => {
  return (
    <>
      <Link to="/nosotrxs">
        <section id="logoMapa" className={styles.LogoMapa}>
          <img id="logo" className={styles.Logo} src="favicon.png" alt="" />
          <h3 className={styles.LogoTitulo}>
            MAPA <br />
            DE LA
            <br />
            POLICIA
          </h3>
        </section>
      </Link>
    </>
  );
};

export default LogoMapa;
