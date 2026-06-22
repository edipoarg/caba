import styles from "./Mapa.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import MapGL from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { REGIONES_CONFIG } from "../../../constants/regiones";
import DependenciasMarkers from "../../DependenciasMarkers/DependenciasMarkers";
import GatilloMarkers from "../../GatilloMarkers/GatilloMarkers";
import ReportesMarkers from "../../ReportesMarkers/ReportesMarkers";
import LogoMapa from "../../LogoMapa/LogoMapa";

import Filtros, { EstadoFiltros } from "../Filtros/Filtros";
import SelectionOverview from "../SelectionOverview/SelectionOverview";
import { limpiarCapasBase } from "./mapaUtils"; 

const Mapa = () => {
  const [ciudadActiva, setCiudadActiva] = useState("mar-del-plata");
  
  const [dependencias, setDependencias] = useState<any>(null);
  const [gatillos, setGatillos] = useState<any>(null);
  const [reportes, setReportes] = useState<any>(null);

  const [filtros, setFiltros] = useState<EstadoFiltros>({
    dependencias: true,
    reportes: true,
    gatillo: true,
  });

  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const configActual = REGIONES_CONFIG[ciudadActiva];
  
  const handleToggleFilter = (capa: keyof EstadoFiltros) => {
    setFiltros((prev) => ({
      ...prev,
      [capa]: !prev[capa],
    }));
  };

  useEffect(() => {
    setDependencias(null);
    setGatillos(null);
    setReportes(null);
    setSelectedMarkerId(null);
    setSelectedCase(null);

    fetch(`/data/${ciudadActiva}/dependencias.json`)
      .then((res) => res.json())
      .then((data) => setDependencias(data))
      .catch((err) => console.error(err));

    fetch(`/data/${ciudadActiva}/gatillo-facil.json`)
      .then((res) => res.json())
      .then((data) => setGatillos(data))
      .catch((err) => console.error(err));

    fetch(`/data/${ciudadActiva}/reportes.json`)
      .then((res) => res.json())
      .then((data) => setReportes(data))
      .catch((err) => console.error(err));
  }, [ciudadActiva]);

  return (
    <section className={styles.Mapa}>
      
     {/* 2. LOGO FLOTANTE CENTRALIZADO */}
      <LogoMapa 
        nombreCiudad={configActual?.nombre} 
        ocultarEnMobile={!!selectedCase} // Si hay caso seleccionado, pasa como true
      />
      {/* 3. FILTROS FLOTANTES (Esquina superior derecha) */}
      <Filtros filtros={filtros} onToggleFilter={handleToggleFilter} />
      
      <SelectionOverview 
        caso={selectedCase} 
        onClose={() => {
          setSelectedCase(null);       // Al cerrar, limpiamos el caso activo
          setSelectedMarkerId(null);   // Y despintamos el pin del mapa
        }} 
      />

      <MapGL
        key={ciudadActiva}
        id="mapa"
        mapLib={maplibregl}
        initialViewState={{
          longitude: configActual.longitude,
          latitude: configActual.latitude,
          zoom: configActual.zoom,
          maxBounds: configActual.maxBounds,
        }}
        minZoom={configActual.minZoom}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json"
        onLoad={(e) => limpiarCapasBase(e.target)}
      >
        
        {dependencias && filtros.dependencias && (
          <DependenciasMarkers
            dependencias={dependencias}
            setSelectedCase={setSelectedCase}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />
        )}

        {gatillos && filtros.gatillo && (
          <GatilloMarkers
            gatillos={gatillos}
            setSelectedCase={setSelectedCase}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />
        )}

        {reportes && filtros.reportes && (
          <ReportesMarkers
            dataDeReportes={reportes}
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