import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecursoPost from "./RecursoPost";
import migrantesData from "./migrantes.json";
import ambulantesData from "./ambulantes.json";
import filmarData from "./filmar.json";
import generoData from "./genero.json";
import institucionalesData from "./institucionales.json";
import detencionData from "./detencion.json";
import guiaData from "./guia.json";
import styles from "./RecursoPost.module.css";
import Icons from "../Iconos/Icons";
import SubMenuPost from "./SubMenuPost";

/** @typedef {{ title: string; content: string; }} Post */
/** @typedef {Post & { id: string; }} PostWithId */

/** @type {(sentence: string) => string;} */
const getStringOfFirstLettersOfSentence = (sentence) =>
  sentence
    .split(" ")
    .map((wrd) => wrd[0])
    .filter((w) => w !== undefined)
    .join("");

/**
 *
 * @param {Post[]} posts
 * @returns {PostWithId[]}
 */
const addUniqueIdentifierToPosts = (posts) =>
  posts.map((p, index) => ({
    ...p,
    id: getStringOfFirstLettersOfSentence(p.title) + index,
  }));

const Recurso = () => {
  const { dominio } = useParams();
  /** @type {[PostWithId[], (p: PostWithId[]) => void]} */
  const [posts, setPosts] = useState([]);

  // Cargar los datos del archivo JSON correspondiente al dominio
  useEffect(() => {
    const cargarPosts = () => {
      // Elegir el archivo JSON según el dominio
      let data;
      switch (dominio) {
        case "migrantes":
          data = migrantesData;
          break;
        case "ambulantes":
          data = ambulantesData;
          break;
        case "filmar":
          data = filmarData;
          break;
        case "genero":
          data = generoData;
          break;
        case "institucionales":
          data = institucionalesData;
          break;
        case "detencion":
          data = detencionData;
          break;
        case "guia":
          data = guiaData;
          break;
        default:
          console.error("Dominio no válido");
      }
      if (data) {
        setPosts(addUniqueIdentifierToPosts(data.posts));
      }
    };

    cargarPosts();
  }, [dominio]);

  return (
    <div className={styles.recurso}>
      <div className={styles.header}>
        <div>
          <Icons icon={dominio} className={styles.icon} iconSize="2.2rem" />
          <h3 className={styles.title}>{dominio}</h3>
        </div>

        <div className={styles.menuContainer}>
          {posts.map((post, index) => (
            <SubMenuPost key={index} title={post.title} href={post.id} />
          ))}
        </div>
      </div>
      <div className={styles.postContainer}>
        {posts.map((post, index) => (
          <RecursoPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Recurso;
