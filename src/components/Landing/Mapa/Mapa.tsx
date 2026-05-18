import styles from "./Mapa.module.css";
import { useContext, useState } from "react";
import MapGL from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import { Link } from "react-router-dom";
import SelectionOverview from "../SelectionOverview/SelectionOverview";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  departamentos,
  caba,
  barriosCaba,
  laPlata,
} from "./geojson-data/index";
import {
  DepsSource,
  CabaSource,
  BarriosCabaSource,
  LaPlataSource,
  DepartamentosLaPlataSource,
} from "../../Sources";
import DependenciasMarkers from "../../dependenciasMarkers/DependenciasMarkers";
import GatilloMarkers from "../../gatilloMarkers/GatilloMarkers";
import ReportesMarkers from "../../reportesMarkers/ReportesMarkers";
import Filtros from "../filtros/Filtros";
import type { Caso } from "../../../models/casos";
import {
  CasosDependenciaContext,
  CasosGatilloContext,
  CasosReportesContext,
} from "../../../routes/Root";
import type { Filtro } from "../types";

const mapProps = {
  initialViewState: {
    longitude: 58.3816,
    latitude: -34.3037,
    zoom: 7,
    minZoom: 2,
    maxZoom: 25,
    maxBounds: [
      [-58.7, -34.8], // Lower-left limit
      [-58.25, -34.43], // Upper-right limit
    ],
  },
  style: {
    width: "100vw",
    height: "100vh",
  },
  mapStyle: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
};

const Mapa = () => {
  const [currentFilter, setCurrentFilter] = useState<Filtro>("all");
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<Caso | null>(null);
  const casosDependencia = useContext(CasosDependenciaContext);
  const casosReportes = useContext(CasosReportesContext);
  const casosGatillo = useContext(CasosGatilloContext);
  const handleFilterChange = (newFilter: Filtro): void => {
    if (newFilter === currentFilter) setCurrentFilter("all");
    else setCurrentFilter(newFilter);
  };

  if (
    casosDependencia === "loading" ||
    casosReportes === "loading" ||
    casosGatillo == "loading"
  )
    return <p>Cargando...</p>;

  if (casosDependencia === null)
    return <p>Ocurrió un error al cargar los datos de dependencias</p>;

  if (casosReportes === null)
    return <p>Ocurrió un error al cargar los datos de reportes</p>;

  if (casosGatillo === null)
    return <p>Ocurrió un error al cargar los casos de gatillo fácil</p>;

  return (
    <section className={styles.Mapa}>
      <Link
        to="/nosotrxs"
        className={`${styles.LogoMapa} ${selectedCase ? "" : styles.visibleOnMobile}`}
      >
        <img id="logo" className={styles.isotipo} src="favicon.png" alt="" />
        <h3 className={styles.LogoTitulo}>
          MAPA <br />
          DE LA
          <br />
          POLICIA
        </h3>
      </Link>

      <SelectionOverview caso={selectedCase} />
      <Link to="/denuncia" className={styles.emergButton}>
        <h4>DENUNCIÁ</h4>
      </Link>
      <Filtros
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
      />

      <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
        <DepsSource data={departamentos} />
        <BarriosCabaSource data={barriosCaba} />
        <CabaSource data={caba} />
        <LaPlataSource data={laPlata} />
        <DepartamentosLaPlataSource data={laPlata} />
        {(currentFilter === "all" || currentFilter === "dependencias") && (
          <DependenciasMarkers
            dependencias={casosDependencia}
            setSelectedCase={setSelectedCase}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />
        )}
        {(currentFilter === "all" || currentFilter === "gatillo") && (
          <GatilloMarkers
            gatillos={casosGatillo}
            setSelectedCase={setSelectedCase}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />
        )}
        {(currentFilter === "all" || currentFilter === "reportes") && (
          <ReportesMarkers
            dataDeReportes={casosReportes}
            setSelectedCase={setSelectedCase}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />
        )}
      </MapGL>
    </section>
  );
};

export default Mapa;
