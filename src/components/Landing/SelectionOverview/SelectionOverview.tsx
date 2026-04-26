import type { Caso } from "../../../models/casos";
import {
  casoIsCasoDependencia,
  casoIsCasoGatillo,
  casoIsCasoReportes,
} from "../../../models/casos";
import styles from "./SelectionOverview.module.css";
import { Link } from "react-router-dom";
import type { Cargo } from "../../../models/cargos";
import { useContext } from "react";
import { CargosContext } from "../../../routes/Root";

// Función para recortar texto si supera el límite de caracteres
const truncateText = (text: string | null, maxLength: number): string => {
  if (text === null) return "";
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

type Props = {
  caso: Caso | null;
};

type SelectionOverviewData = {
  title: string;
  date?: string;
  address?: string;
  phone?: string;
  age?: string;
  circs?: string;
  caseId?: string;
  grade?: string;
  authority?: string;
  level?: string;
};

const getSelectionOverviewDataForCase =
  (cargos: Cargo[]) =>
  (caso: Caso | null): SelectionOverviewData => {
    const title = caso?.properties.Nombre ?? "Elegí una dependencia o un caso";
    if (caso !== null) {
      if (casoIsCasoDependencia(caso)) {
        const oficialAsociado = cargos.find((cargo) => {
          return cargo.C_Dependencia === caso.properties.Nombre;
        });
        return {
          title,
          caseId: caso.properties.Contador,
          level: caso.properties.Dependencia,
          address: caso.properties.Dirección,
          phone: caso.properties.Teléfono,
          grade: oficialAsociado?.C_GRADO,
          authority: oficialAsociado?.C_Efectivo_AyN,
        };
      } else if (casoIsCasoGatillo(caso)) {
        return {
          title,
          date: caso.properties.Fecha,
          caseId: caso.properties.Contador,
          circs: caso.properties.cronica,
          authority: caso.properties.policia_involucrado,
        };
      } else if (casoIsCasoReportes(caso)) {
        return {
          title,
          date: caso.properties.Fecha,
          circs: caso.properties.cronica,
          caseId: caso.properties.Contador,
          authority: caso.properties.policia_involucrado,
        };
      }
    }
    return {
      title,
    };
  };

const SelectionOverview = ({ caso }: Props) => {
  const cargos = useContext(CargosContext);
  if (cargos === "loading") return <p>Cargando...</p>;
  if (cargos === null)
    return <p>Ocurrió un error al cargar los datos de la página</p>;

  if (!caso)
    return (
      <section className={styles.SelectionOverview}>
        <h2>Elegí una dependencia o un caso</h2>
      </section>
    );
  const selectionOverviewData = getSelectionOverviewDataForCase(cargos)(caso);
  const {
    title,
    date,
    address,
    phone,
    age,
    circs,
    caseId,
    grade,
    authority,
    level,
  } = selectionOverviewData;
  return (
    <section className={styles.SelectionOverview}>
      <section className={styles.comisaria}>
        <h3>{level}</h3>
        <h2 className={styles.title}>{truncateText(title, 32)}</h2>
        <h4 className={styles.date}>{date}</h4>
        <h4 className={styles.address}>{address}</h4>
        <h4 className={styles.phone}>{phone}</h4>
        <h4 className={styles.age}>{age}</h4>
        <h4 className={styles.circs}>{truncateText(circs ?? null, 95)}</h4>
        {caseId && (
          <Link to={`/ficha/${caseId}`}>
            <h3 className={styles.moreButton}>Ver +</h3>
          </Link>
        )}
      </section>
      {(grade || authority) && (
        <section className={styles.autoridadData}>
          {grade && <h3 className={styles.grade}>{grade}</h3>}
          {authority && (
            <h2 className={styles.authority}>{truncateText(authority, 35)}</h2>
          )}
        </section>
      )}
    </section>
  );
};

export default SelectionOverview;
