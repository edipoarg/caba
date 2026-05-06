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
import LinesEllipsis from "react-lines-ellipsis";

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
  if (!caso) return null;
  if (cargos === "loading") return <p>Cargando...</p>;
  if (cargos === null)
    return <p>Ocurrió un error al cargar los datos de la página</p>;

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
      {(grade || authority) && (
        <section className={styles.autoridadData}>
          {grade && <h3 className={styles.grade}>{grade}</h3>}
          {authority && (
            <h2 className={styles.authority}>
              <LinesEllipsis
                component="span"
                text={authority}
                title={authority}
                maxLine="4"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </h2>
          )}
        </section>
      )}
      <section className={styles.comisaria}>
        {level && <h3>{level}</h3>}
        {title && (
          <p className={styles.title} title={title}>
            <LinesEllipsis
              component="span"
              text={title}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>
        )}
        {date && <p className={styles.date}>{date}</p>}
        {address && <p className={styles.address}>{address}</p>}
        {phone && <p className={styles.phone}>{phone}</p>}
        {age && <p className={styles.age}>{age}</p>}
        {circs && (
          <p className={styles.circs}>
            <LinesEllipsis
              component="span"
              text={circs}
              maxLine="4"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>
        )}
        {caseId && (
          <Link className={styles.moreButton} to={`/ficha/${caseId}`}>
            <span>Ver +</span>
          </Link>
        )}
      </section>
    </section>
  );
};

export default SelectionOverview;
