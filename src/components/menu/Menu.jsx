import Icons from "../iconos/Icons";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const menuItems = [
  { path: "/", icon: "mapa" },
  { path: "/denuncia", icon: "denuncias" },
  { path: "/recursos", icon: "recursos" },
  { path: "/investigaciones", icon: "investigaciones" },
  {
    path: "https://3bcdb122-7a37-4e33-8ed3-b705eeb52529.filesusr.com/ugd/0f4ca0_b842b32fa4c4452498e07a1d8b6da1bf.pdf",
    icon: "reportes",
  },
  { path: "/gatillo-facil", icon: "gatillo" },
  { path: "/ahora", icon: "AHORA" },
  {
    path: "https://open.spotify.com/show/1fhXtCulH39aZgv9P7WH7k",
    icon: "podcast",
  },
  { path: "/nosotrxs", icon: "contacto" },
];

const Menu = () => {
  return (
    <>
      <section className={styles.menuContainer}>
        <section className={styles.menu}>
          {menuItems.map((menuItem, index) => (
            <Link key={index} to={menuItem.path}>
              <Icons
                icon={menuItem.icon}
                className={styles.icon}
                iconSize="2.2rem"
              />
              <h5 className={styles.iconName}>{menuItem.icon}</h5>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
};

export default Menu;
