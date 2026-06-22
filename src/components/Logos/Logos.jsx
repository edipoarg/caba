/* eslint-disable react/prop-types */
import styles from "./Logos.module.css";

const Logos = ({ logos }) => {
  return (
    <div className={styles.logosList}>
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.logos}
            src={logo.image}
            alt={`Logo ${index}`}
          />
        </a>
      ))}
    </div>
  );
};

export default Logos;
