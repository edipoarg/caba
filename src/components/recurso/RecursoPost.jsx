// TODO Ale tiene que arreglar todo este archivo
/* eslint-disable react/prop-types */
import styles from "./RecursoPost.module.css";

const RecursoPost = ({
  title,
  subtitle,
  Dirección,
  WhatsApp,
  Teléfono,
  Email,
  content,
  link,
  id,
}) => {
  return (
    <div className={styles.post} id={id}>
      <div className={styles.titleContainer}>
        <h4 className={styles.postTitle}>{title}</h4>
        {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      </div>
      <div className={styles.submenu}>
        {Dirección && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Dirección:</h3> {Dirección}
          </div>
        )}
        {Teléfono && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Teléfono:</h3> {Teléfono}
          </div>
        )}
        {WhatsApp && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>WhatsApp:</h3> {WhatsApp}
          </div>
        )}
        {Email && (
          <div className={styles.detail}>
            <h3 className={styles.detailType}>Email:</h3> {Email}
          </div>
        )}
        {content && <p className={styles.content}>{content}</p>}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default RecursoPost;
