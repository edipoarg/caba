import styles from "../styles/Screen.module.css";
import { Link } from "react-router-dom";

// Función para recortar texto si supera el límite de caracteres
const truncateText = (text: string | null, maxLength: number): string => {
  if (text === null) return "";
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

type Props = {
  title: string | null;
  level: string | null;
  address: string | null;
  phone: string | null;
  age: string | null;
  date: string | null;
  circs: string | null;
  caseId: string | null;
  autority: string | null;
  grade: string | null;
};

// Ya le pusimos screen, voy a ignorar esto, dudo muchísimo de que accedamos a Screen como variable global
// eslint-disable-next-line no-redeclare
const Screen = ({
  title,
  level,
  address,
  phone,
  age,
  date,
  circs,
  caseId,
  autority,
  grade,
}: Props) => {
  return (
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen}>
        <section className={styles.ComisariaData}>
          <h3 className={styles.level}>{level}</h3>
          <h2 className={styles.title}>{truncateText(title, 32)}</h2>
          <h4 className={styles.date}>{date}</h4>
          <h4 className={styles.address}>{address}</h4>
          <h4 className={styles.phone}>{phone}</h4>
          <h4 className={styles.age}>{age}</h4>
          <h4 className={styles.circs}>{truncateText(circs, 95)}</h4>
          {caseId && (
            <Link to={`/ficha/${caseId}`}>
              <h3 className={styles.moreButton}>Ver +</h3>
            </Link>
          )}
        </section>
      </section>
      {(grade || autority) && (
        <section className={styles.autoridadData}>
          {grade && <h3 className={styles.grade}>{grade}</h3>}
          {autority && (
            <h2 className={styles.autority}> {truncateText(autority, 35)} </h2>
          )}
        </section>
      )}
    </section>
  );
};

export default Screen;
