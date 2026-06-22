import { useState } from "react";
import MapGL from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import styles from "./MapaBlur.module.css";

// 1. Importamos la configuración centralizada (revisá que la ruta de carpetas coincida)
import { REGIONES_CONFIG } from "../../constants/regiones";

const MapaBlur = () => {
  // 2. Seteamos 'mar-del-plata' como ciudad activa por defecto
  const [ciudadActiva] = useState("mar-del-plata");

  // 3. Obtenemos los datos geográficos de la ciudad seleccionada
  const configActual = REGIONES_CONFIG[ciudadActiva];

  return (
    <section id="MapaDev" className={styles.MapaDev}>
      <Link to="/denuncia">
        <div className={styles.emergButton}>
          <h4 className={styles.emerg}>DENUNCIÁ</h4>
        </div>
      </Link>
      
      {/* Esta es la capa CSS que le mete el blur por encima al mapa */}
      <section className={styles.mapBlur}></section>

      <MapGL 
        key={ciudadActiva} // Recrea el mapa limpiamente si cambia la ciudad
        id="mapa" 
        mapLib={maplibregl} 
        initialViewState={{
          longitude: configActual.longitude,
          latitude: configActual.latitude,
          // Le bajamos 1 punto al zoom original de la ciudad para que se vea 
          // un toque más alejado y abstracto, ideal para un fondo decorativo
          zoom: configActual.zoom - 1, 
          maxBounds: configActual.maxBounds,
        }}
        minZoom={configActual.minZoom}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json"
      >
        {/* 4. COMENTADO TEMPORALMENTE:
          Sacamos los barrios de CABA para que no rompa en Mar del Plata.
          Cuando tengas el GeoJSON de los barrios de MDQ, acá vas a poder poner:
          {ciudadActiva === 'mar-del-plata' ? <BarriosMdpSource /> : <BarriosCabaSource />}
        */}
        {/* <BarriosCabaSource data={barriosCaba} /> */}
      </MapGL>
    </section>
  );
};

export default MapaBlur;
