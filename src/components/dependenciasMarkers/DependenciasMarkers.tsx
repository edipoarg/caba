import { Marker } from "react-map-gl/maplibre";
import styles from "./DependenciasMarkers.module.css";
import Icons from "../iconos/Icons";
import { CasoDependencia, DataDeCasos } from "../../models/models";

type Props = {
  dependencias: DataDeCasos<CasoDependencia>;
  setSelectedCase: (dep: CasoDependencia) => void;
  setMarker: (markerName: string) => void;
  selected: string | null;
};

const DependenciasMarkers = ({
  dependencias,
  setSelectedCase,
  setMarker,
  selected,
}: Props) => {
  const renderMarker = (dependencia: CasoDependencia) => {
    const { properties, geometry } = dependencia;
    const { Contador, Nombre } = properties;
    const { coordinates } = geometry;
    const [latitude = 0, longitude = 0] = coordinates;
    const dependenciasStyle = `${styles.dependencias} ${selected === Contador ? styles.selected : ""}`;
    return (
      <Marker
        key={Contador}
        longitude={longitude}
        latitude={latitude}
        onClick={() => {
          setMarker(Nombre);
          setSelectedCase(dependencia);
        }}
      >
        <Icons
          icon={"dependencia"}
          className={dependenciasStyle}
          iconSize={"1.2rem"}
        />
      </Marker>
    );
  };

  return (
    <>{dependencias.features.map((dependencia) => renderMarker(dependencia))}</>
  );
};

export default DependenciasMarkers;
