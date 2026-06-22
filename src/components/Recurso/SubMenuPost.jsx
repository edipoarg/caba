/* eslint-disable react/prop-types */
import { useCallback } from "react";
import styles from "./SubMenuPost.module.css";

const SubMenuPost = ({ title, href }) => {
  const onClick = useCallback(() => {
    document.getElementById(href).scrollIntoView();
  }, [href]);
  return (
    <button type="button" className={styles.postMenu} onClick={onClick}>
      <h4 className={styles.buttonTitle}>{title}</h4>
    </button>
  );
};

export default SubMenuPost;
