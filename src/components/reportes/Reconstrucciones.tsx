import ReportesIcon from "./ReportesIcon";
import styles from "./Reconstrucciones.module.css";

interface Reconstruccion {
  id: number;
  titulo: string;
  descripcion?: string;
  url: string;
  thumbnail?: string;
}

interface Props {
  lista: Reconstruccion[];
}

export default function Reconstrucciones({ lista }: Props) {
  if (!lista.length) return null;

  const reversed = [...lista].reverse();

  return (
    <section className={styles.block}>
      <h3 className={styles.heading}>
        <ReportesIcon type="video" className={styles.iconTitle} />
        Reconstrucciones
      </h3>

      <ul className={styles.list}>
        {reversed.map((rec) => (
          <li key={rec.id} className={styles.item}>
            <a
              href={rec.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbLink}
            >
              {rec.thumbnail ? (
                <img
                  src={rec.thumbnail}
                  alt={`Miniatura de ${rec.titulo}`}
                  className={styles.thumbnail}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/thumbnail-fallback.png";
                  }}
                />
              ) : (
                <div className={styles.noThumbnail}>Sin preview</div>
              )}
              <span className={styles.reelBadge} />
            </a>

            <h4 className={styles.title}>
              <a
                href={rec.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {rec.titulo}
              </a>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
