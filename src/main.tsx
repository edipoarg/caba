// ==========================================
// 1. LIBRERÍAS EXTERNAS (node_modules)
// ==========================================
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

// ==========================================
// 2. ESTILOS GLOBALES
// ==========================================
import "./index.css";

// ==========================================
// 3. ESTRUCTURA Y RUTAS BASE
// ==========================================
import Root from "./routes/Root";
import App from "./App";

// ==========================================
// 4. COMPONENTES DE PÁGINAS (En PascalCase)
// ==========================================
// Bloque Denuncias
import DenunciaForm from "./components/DenunciaForm/DenunciaForm";
import Denuncias from "./components/Denuncias/Denuncias";

// Bloque Reportes
import Reportes from "./components/Reportes/Reportes";
import CuartoReporte from "./components/Reportes/CuartoReporte";
import QuintoReporte from "./components/Reportes/QuintoReporte";
import SextoReporte from "./components/Reportes/SextoReporte";

// Bloque Investigaciones
import Investigaciones from "./components/Investigaciones/Investigaciones";
import TodasInvestigaciones from "./components/Investigaciones/TodasInvest/TodasInvestigaciones";
import Investigacion from "./components/Investigaciones/Investigacion/Investigacion";
import Autorxs from "./components/Investigaciones/Autorxs/Autorxs";
import FichaAutorxs from "./components/Investigaciones/Autorxs/FichaAutorxs";

// Bloque Recursos
import Recursos from "./components/Recursos/Recursos";
import Recurso from "./components/Recurso/Recurso";
import Organizate from "./components/Recurso/Organizate";

// Bloque Institucional y Otros
import Jefatura from "./components/Jefatura/Jefatura";
import Nosotrxs from "./components/Nosotrxs/Nosotrxs";
import Menu from "./components/Menu/Menu";
import Podcast from "./components/Podcast/Podcast";
import GatilloFacil from "./components/GatilloFacil/GatilloFacil";
import Ficha from "./components/Fichas/Ficha";
import Ahora from "./components/Ahora/Ahora";

// ==========================================
// CONFIGURACIÓN DE ENRUTAMIENTO (HashRouter)
// ==========================================
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/denuncias", element: <Denuncias /> },
      { path: "/denuncia", element: <DenunciaForm /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/investigaciones", element: <Investigaciones /> },
      { path: "/jefatura", element: <Jefatura /> },
      { path: "/reportes", element: <Reportes /> },
      { path: "/nosotrxs", element: <Nosotrxs /> },
      { path: "/menu", element: <Menu /> },
      { path: "/podcast", element: <Podcast /> },
      { path: "/gatillo-facil", element: <GatilloFacil /> },
      { path: "/recursos/:dominio", element: <Recurso /> },
      { path: "/organizate", element: <Organizate /> },
      { path: "/autorxs", element: <Autorxs /> },
      { path: "/:enlaceVer", element: <FichaAutorxs /> },
      { path: "/investigacion/:dominio", element: <Investigacion /> },
      { path: "/lista", element: <TodasInvestigaciones /> },
      { path: "/ficha/:Contador", element: <Ficha /> },
      { path: "/ahora", element: <Ahora /> },
      { path: "/cuarto-reporte", element: <CuartoReporte /> },
      { path: "/quinto-reporte", element: <QuintoReporte /> },
      { path: "/sexto-reporte", element: <SextoReporte /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);