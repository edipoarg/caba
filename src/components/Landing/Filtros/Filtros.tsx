import styles from "./Filtros.module.css";
import { TbAlertTriangle } from "react-icons/tb";
import { FaMapMarker } from "react-icons/fa";


import Icons from "../../Iconos/Icons";


// Definimos el tipo para controlar el estado de las capas
export type EstadoFiltros = {
  dependencias: boolean;
  reportes: boolean;
  gatillo: boolean;
};

type Props = {
  filtros: EstadoFiltros;
  onToggleFilter: (capa: keyof EstadoFiltros) => void;
};

export default function Filtros({ filtros, onToggleFilter }: Props) {
  return (
    <div className={styles.Filtros}>
      {/* Botón Comisarías */}
      <div
        className={`${styles.filter} ${filtros.dependencias ? styles.selected : ""} ${styles.dependenciasFilter}`}
        onClick={() => onToggleFilter("dependencias")}
      >
        <FaMapMarker
          className={styles.filterIcon}
          style={{ fontSize: "1.2rem" }}
        />
        <h4 className={styles.filterName}>Comisarías</h4>
      </div>

      {/* Botón Reportes */}
      <div
        className={`${styles.filter} ${filtros.reportes ? styles.selected : ""} ${styles.reportesFilter || ""}`}
        onClick={() => onToggleFilter("reportes")}
      >
        <Icons icon={"reportes_mapa"} className={styles.filterIcon} iconSize={"2rem"} />
        <h4 className={styles.filterName}>Reportes</h4>
      </div>

      {/* Botón Gatillo Fácil */}
      <div
        className={`${styles.filter} ${filtros.gatillo ? styles.selected : ""} ${styles.gatilloFilter}`}
        onClick={() => onToggleFilter("gatillo")}
      >
        <Icons icon={"gatillo_mapa"} className={styles.filterIcon} iconSize={"2rem"} />
        <h4 className={styles.filterName}>Gatillo Fácil</h4>
      </div>
    </div>
  );
}