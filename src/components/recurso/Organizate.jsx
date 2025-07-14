import styles from "./Organizate.module.css";

const Organizate = () => {
  return (
    <>
      <section className={styles.organizate}>
        <div className={styles.header}>
          <h3 className={styles.title}>Organizate</h3>
          <h4 className={styles.subTitle}>
            Ponete en contacto con organizaciones que luchan contra la violencia
            policial e institucional
          </h4>
        </div>
        <div className={styles.logosBox}>
          <h4 className={styles.logos}></h4>
        </div>
      </section>
    </>
  );
};

export default Organizate;
