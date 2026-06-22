import { Link } from "react-router-dom";
import styles from "./LogoMapa.module.css";

type Props = {
  nombreCiudad?: string;
  ocultarEnMobile: boolean; // Pasamos el 'selectedCase' como un booleano directo
};

const LogoMapa = ({ nombreCiudad, ocultarEnMobile }: Props) => {
  return (
    <Link
      to="/nosotrxs"
      className={`${styles.LogoMapa} ${ocultarEnMobile ? styles.hiddenOnMobile : ""}`}
    >
      {/* Agrupamos los textos en un contenedor para que Flexbox no los separe */}
      <div className={styles.textoContainer}>
        <h3 className={styles.LogoTitulo}>
          MAPA <br /> DE LA <br /> POLICIA
        </h3>
        <h4 className={styles.LogoSubTitulo}>
          {nombreCiudad ?? "Cargando..."}
        </h4>
      </div>
      
      <img className={styles.isotipo} src="favicon.png" alt="Isotipo" />
    </Link>
  );
};

export default LogoMapa;