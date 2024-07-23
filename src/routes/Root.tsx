import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import styles from "./Root.module.css";
import { Cargo } from "../models/cargos.js";
import {
  getCargos,
  getDataDeCasosDependencias,
  getDataDeCasosGatillo,
  getDataDeCasosReportes,
} from "../data/fetching.js";
import {
  CasoDependencia,
  CasoGatillo,
  CasoReportes,
  DataDeCasos,
} from "../models/casos.js";

type LoadableData<T> = "loading" | null | T;

type CargosContextType = LoadableData<Cargo[]>;
type CasosGatilloContextType = LoadableData<DataDeCasos<CasoGatillo>>;
type CasosDependenciaContextType = LoadableData<DataDeCasos<CasoDependencia>>;
type CasosReportesContextType = LoadableData<DataDeCasos<CasoReportes>>;

export const CargosContext = createContext<CargosContextType>("loading");
export const CasosGatilloContext =
  createContext<CasosGatilloContextType>("loading");
export const CasosDependenciaContext =
  createContext<CasosDependenciaContextType>("loading");
export const CasosReportesContext =
  createContext<CasosReportesContextType>("loading");

export default function Root() {
  const [cargos, setCargos] = useState<CargosContextType>("loading");
  const [casosGatillo, setCasosGatillo] =
    useState<CasosGatilloContextType>("loading");
  const [casosDependencia, setCasosDependencia] =
    useState<CasosDependenciaContextType>("loading");
  const [casosReportes, setCasosReportes] =
    useState<CasosReportesContextType>("loading");

  useEffect(() => {
    getCargos()
      .then((cargos) => {
        setCargos(cargos);
      })
      .catch(() => {
        setCargos(null);
      });

    getDataDeCasosGatillo()
      .then((data) => {
        setCasosGatillo(data);
      })
      .catch(() => {
        setCasosGatillo(null);
      });

    getDataDeCasosDependencias()
      .then((data) => {
        setCasosDependencia(data);
      })
      .catch(() => {
        setCasosDependencia(null);
      });

    getDataDeCasosReportes()
      .then((data) => {
        setCasosReportes(data);
      })
      .catch(() => {
        setCasosReportes(null);
      });
  }, []);

  return (
    <CasosReportesContext.Provider value={casosReportes}>
      <CasosDependenciaContext.Provider value={casosDependencia}>
        <CasosGatilloContext.Provider value={casosGatillo}>
          <CargosContext.Provider value={cargos}>
            <section className={styles.root}>
              <Navbar />
              <Outlet />
            </section>
          </CargosContext.Provider>
        </CasosGatilloContext.Provider>
      </CasosDependenciaContext.Provider>
    </CasosReportesContext.Provider>
  );
}
