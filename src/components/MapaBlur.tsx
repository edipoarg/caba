import MapGL from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import LogoMapa from "./LogoMapa";
// eslint-disable-next-line no-redeclare
import styles from "../styles/MapaBlur.module.css";

// GEOJSON IMPORTS
import {
  departamentos,
  caba,
  barriosCaba,
  laPlata,
  departamentosLaPlata,
} from "../data/index";
import {
  DepsSource,
  CabaSource,
  BarriosCabaSource,
  LaPlataSource,
  DepartamentosLaPlataSource,
} from "./Sources";

const Mapa = () => {
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

  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <Link to="/denuncia">
          <div className={styles.emergButton}>
            <h4 className={styles.emerg}>DENUNCIÁ</h4>
          </div>
        </Link>
        <section className={styles.mapBlur}></section>
        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
          <DepsSource data={departamentos} />
          <BarriosCabaSource data={barriosCaba} />
          <CabaSource data={caba} />
          <LaPlataSource data={laPlata} />
          <DepartamentosLaPlataSource data={departamentosLaPlata} />
        </MapGL>
        <LogoMapa />
      </section>
    </>
  );
};

export default Mapa;
