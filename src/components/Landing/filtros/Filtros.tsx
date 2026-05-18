import styles from "./Filtros.module.css";
import type { Filtro } from "../types";
import { TbAlertTriangle } from "react-icons/tb";
import { FaMapMarker } from "react-icons/fa";

type Props = {
  currentFilter: Filtro;
  handleFilterChange: (newFilter: Filtro) => void;
};

export default function Filtros({ currentFilter, handleFilterChange }: Props) {
  return (
    <div className={styles.Filtros}>
      <div
        className={`${styles.filter} ${currentFilter === "dependencias" ? styles.selected : ""} ${styles.dependenciasFilter}`}
        onClick={() => handleFilterChange("dependencias")}
      >
        <FaMapMarker
          className={styles.filterIcon}
          style={{ fontSize: "1.2rem" }}
        />
        <h4 className={styles.filterName}>Comisarías </h4>
      </div>

      <div
        className={`${styles.filter} ${currentFilter === "reportes" ? styles.selected : ""}`}
        onClick={() => handleFilterChange("reportes")}
      >
        <TbAlertTriangle className={styles.filterIcon} />
        <h4 className={styles.filterName}> Reportes </h4>
      </div>

      <div
        className={`${styles.filter} ${currentFilter === "gatillo" ? styles.selected : ""} ${styles.gatilloFilter}`}
        onClick={() => handleFilterChange("gatillo")}
      >
        <TbAlertTriangle className={styles.filterIcon} />
        <h4 className={styles.filterName}> Gatillo Fácil</h4>
      </div>
    </div>
  );
}
