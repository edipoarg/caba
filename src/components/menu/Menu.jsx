import Icons from "../iconos/Icons";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const menuItems = [
  { path: "/", icon: "mapa" },
  { path: "/denuncia", icon: "denuncias" },
  { path: "/recursos", icon: "recursos" },
  { path: "/investigaciones", icon: "investigaciones" },
  { path: "/reportes", icon: "reportes" },
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
