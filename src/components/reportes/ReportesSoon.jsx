import styles from "./ReportesSoon.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";

const ReportesSoon = () => {
  return (
    <section className={styles.soonContainer}>
      <section className={styles.soon}>
        <Icons
          icon={"reportes"}
          className={styles.headerIcon}
          iconSize="2rem"
        />
        <h3 className={styles.title}>Próximamente</h3>
        <h4 className={styles.subTitle}>Reportes de violenzia polizial</h4>
      </section>
      <section className={styles.report}>
        <h3 className={styles.subTitle}>Si sufriste</h3>
        <h4 className={styles.title}>Violenzia polizial</h4>
        <h4 className={styles.subTitle}>denunzia aqui</h4>
        <Link to="/denuncia">
          <h4 className={styles.button}>Ir</h4>
        </Link>
      </section>
    </section>
  );
};

export default ReportesSoon;
