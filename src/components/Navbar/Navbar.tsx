import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsMegaphone } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { TbZoomExclamation } from "react-icons/tb";
import { BiBookReader } from "react-icons/bi";
import { IoAppsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <section id="NavBar" className={styles.Navbar}>
      <Link to="/" title="mapa">
        <TbZoomExclamation
          className={styles.Button}
          style={{ fontSize: "2rem" }}
        />
      </Link>

      <Link to="denuncias" title="denuncias">
        <BsMegaphone className={styles.Button} style={{ fontSize: "2rem" }} />
      </Link>

      <Link to="recursos" title="recursos">
        <VscTools className={styles.Button} style={{ fontSize: "2rem" }} />
      </Link>

      <Link to="investigaciones" title="investigaciones">
        <BiBookReader className={styles.Button} style={{ fontSize: "2rem" }} />
      </Link>

      <Link to="menu" title="menu">
        <IoAppsOutline className={styles.Button} style={{ fontSize: "2rem" }} />
      </Link>
    </section>
  );
};

export default Navbar;
