import { useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import LogoMapa from "./LogoMapa";
// eslint-disable-next-line no-redeclare
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";

// GEOJSON IMPORTS
import {
  departamentos,
  caba,
  barriosCaba,
  laPlata,
  departamentosLaPlata,
  reportes,
  gatillo,
} from "../data/index";
import {
  DepsSource,
  CabaSource,
  BarriosCabaSource,
  LaPlataSource,
  DepartamentosLaPlataSource,
} from "./Sources";

// MARKERS IMPORTS
import { dependenciasCaba } from "../data/index";
import DependenciasMarkers from "./dependenciasMarkers/DependenciasMarkers";
import GatilloMarkers from "./gatilloMarkers/GatilloMarkers";
import ReportesMarkers from "./reportesMarkers/ReportesMarkers";

//Filtros Import
import Filtros from "./filtros/Filtros";
import { Caso } from "../models/models";

type Filtro = "reportes" | "dependencias" | "gatillo" | "all";

const Mapa = () => {
  const [currentFilter, setCurrentFilter] = useState<Filtro>("all");

  const handleFilterChange = (newFilter: Filtro): void => {
    if (newFilter === currentFilter) setCurrentFilter("all");
    else setCurrentFilter(newFilter);
  };

  // PROPERTIES OF THE MAP
  const mapProps = {
    initialViewState: {
      longitude: 58.3816,
      latitude: -34.6037,
      zoom: 1.5,
      minZoom: 1,
      maxZoom: 25,
      maxBounds: [
        [-58.59, -34.8], // Lower-left limit
        [-58.31, -34.478], // Upper-right limit
      ],
    },
    style: {
      width: "100vw",
      height: "100vh",
    },

    //New Style (Full map data)
    mapStyle: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
  };

  //visibilidad Filtro
  //TODO: Remove this
  const [filtrosVisible, setFiltrosVisible] = useState(true);
  const toggleFiltrosVisibility = () => {
    setFiltrosVisible(!filtrosVisible);
  };
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false);
  const handleClickCloseButton = () => {
    // Toggle the state when the button is clicked
    setIsCloseButtonClicked(!isCloseButtonClicked);
  };

  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);

  // SCREEN INFO
  const [selectedCase, setSelectedCase] = useState<Caso | null>(null);

  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <Link to="/denuncia">
          <div className={styles.emergButton}>
            <h4 className={styles.emerg}>DENUNCIÁ</h4>
          </div>
        </Link>

        <Filtros
          currentFilter={currentFilter}
          handleFilterChange={handleFilterChange}
        />

        <div className={styles.botonFiltrosMain}>
          {/* FIXME: Why is this not a button? */}
          {/* Render different button content based on the state */}
          <a
            aria-label="Hide"
            onClick={() => {
              handleClickCloseButton();
              toggleFiltrosVisibility();
            }}
            href="#"
            className={`${styles.closeButton} ${styles["simple-button"]} ${isCloseButtonClicked ? styles["transformed-button"] : ""}`}
          >
            {isCloseButtonClicked ? (
              <div>
                <h5 className={styles.botonFiltrosMap}>FILTROS</h5>
              </div>
            ) : (
              <>X</>
            )}
          </a>
        </div>
        <Screen caso={selectedCase} />

        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
          <NavigationControl position="top-right" />
          <DepsSource data={departamentos} />
          <BarriosCabaSource data={barriosCaba} />
          <CabaSource data={caba} />
          <LaPlataSource data={laPlata} />
          <DepartamentosLaPlataSource data={departamentosLaPlata} />

          {/* Renderiza los marcadores de las dependencias */}
          {(currentFilter === "all" || currentFilter === "dependencias") && (
            <DependenciasMarkers
              dependencias={dependenciasCaba}
              setSelectedCase={setSelectedCase}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}

          {(currentFilter === "all" || currentFilter === "gatillo") && (
            <GatilloMarkers
              gatillos={gatillo}
              setSelectedCase={setSelectedCase}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}

          {(currentFilter === "all" || currentFilter === "reportes") && (
            <ReportesMarkers
              dataDeReportes={reportes}
              setSelectedCase={setSelectedCase}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}
        </MapGL>
        <LogoMapa />
      </section>
    </>
  );
};

export default Mapa;
