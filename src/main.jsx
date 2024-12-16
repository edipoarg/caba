import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Investigaciones from "./components/Investigaciones/Investigaciones";
import Denuncia from "./components/denuncia/Denuncia";
import Denuncias from "./components/denuncias/Denuncias";
import Recursos from "./components/recursos/Recursos";
import Jefatura from "./components/jefatura/Jefatura";
import Reportes2 from "./components/reportes/Reportes2";
import Nosotrxs from "./components/us/Nosotrxs";
import Menu from "./components/menu/Menu";
import GatilloFacil from "./components/gatilloFacil/GatilloFacil";
import Podcast from "./components/podcast/Podcast";
import Recurso from "./components/recurso/Recurso";
import Autorxs from "./components/Investigaciones/autorxs/Autorxs";
import FichaAutorxs from "./components/Investigaciones/autorxs/FichaAutorxs";
import Investigacion from "./components/Investigaciones/investigacion/Investigacion";
import Root from "./routes/Root";
import Ficha from "./components/fichas/Ficha";
import Organizate from "./components/recurso/Organizate";
import TodasInvestigaciones from "./components/Investigaciones/todasInvest/TodasInvestigaciones";
import Ahora from "./components/ahora/Ahora";

// Not using BrowserRouter because of github pages.
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/denuncias", element: <Denuncias /> },
      { path: "/denuncia", element: <Denuncia /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/investigaciones", element: <Investigaciones /> },
      { path: "/jefatura", element: <Jefatura /> },
      { path: "/reportes", element: <Reportes2 /> },
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
