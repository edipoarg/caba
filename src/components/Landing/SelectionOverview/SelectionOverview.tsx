import { useContext } from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { CargosContext } from "../../../routes/Root";
import type { Cargo } from "../../../models/cargos";
import type { Caso } from "../../../models/casos";
import {
  casoIsCasoDependencia,
  casoIsCasoGatillo,
  casoIsCasoReportes,
} from "../../../models/casos";

import styles from "./SelectionOverview.module.css";

type Props = {
  caso: Caso | null;
  onClose: () => void;
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
          // Condicional de seguridad por si la comisaría no tiene oficial asignado
          authority: oficialAsociado?.C_Efectivo_AyN ?? "Comisario no cargado",
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
    
    return { title };
  };

const SelectionOverview = ({ caso, onClose }: Props) => {
  const cargos = useContext(CargosContext);

  if (!caso) return null;
  if (cargos === "loading") return <p>Cargando...</p>;
  if (cargos === null) {
    return <p>Ocurrió un error al cargar los datos de la página</p>;
  }

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

  // Evaluamos el tipo de caso para inyectar la clase de color correspondiente
  let colorClass = "";
  if (casoIsCasoDependencia(caso)) colorClass = styles.esComisaria;
  if (casoIsCasoGatillo(caso)) colorClass = styles.esGatillo;
  if (casoIsCasoReportes(caso)) colorClass = styles.esReporte;

  console.log("%c🔍 DIAGNÓSTICO OVERVIEW", "color: #00ffcc; font-weight: bold; font-size: 12px;");
  console.log("1. Datos crudos del caso cliqueado:", caso?.properties);
  console.log("2. Evaluaciones lógicas de las funciones:");
  console.log("   - ¿Es Dependencia/Comisaría?:", casoIsCasoDependencia(caso));
  console.log("   - ¿Es Gatillo Fácil?:", casoIsCasoGatillo(caso));
  console.log("   - ¿Es Reporte?:", casoIsCasoReportes(caso));
  console.log("3. Mapeo de CSS Modules (Si da 'undefined', hay un error de tipeo en el CSS):");
  console.log("   - Objeto styles completo:", styles);
  console.log("   - Valor de styles.esComisaria:", styles.esComisaria);
  console.log("4. Clase final que se va a aplicar al HTML:", colorClass);
  console.log("%c-----------------------", "color: #00ffcc;");
  
  return (
    <section className={`${styles.SelectionOverview} ${colorClass}`}>
      {/* Sección Superior: Información de la Autoridad */}
      {(grade || authority) && (
        <section className={styles.autoridadData}>
          {grade && <h3 className={styles.grade}>{grade}</h3>}
          {authority && (
            <LinesEllipsis
              text={authority}
              title={authority}
              maxLine="4"
              ellipsis="..."
              trimRight
              basedOn="letters"
              className={styles.authority}
              component="h2"
            />
          )}
        </section>
      )}

      {/* Sección Inferior: Información de la Dependencia o Suceso */}
      <section className={styles.comisaria}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <IoIosCloseCircleOutline size={20} />
        </button>
        
        {level && <h3>{level}</h3>}
        
        {title && (
          <LinesEllipsis
            text={title}
            component="p"
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className={styles.title}
            title={title}
          />
        )}
        
        {date && <p className={styles.date}>{date}</p>}
        {address && <p className={styles.address}>{address}</p>}
        {phone && <p className={styles.phone}>{phone}</p>}
        {age && <p className={styles.age}>{age}</p>}
        
        {circs && (
          <LinesEllipsis
            text={circs}
            maxLine="4"
            ellipsis="..."
            trimRight
            basedOn="letters"
            component="p"
            className={styles.circs}
          />
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