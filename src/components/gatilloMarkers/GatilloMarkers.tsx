import { Marker } from "react-map-gl/maplibre";
import styles from "./GatilloMarkers.module.css";
import Icons from "../iconos/Icons";
import { CasoGatillo, DataDeCasos } from "../../models/models";

type Props = {
  gatillos: DataDeCasos<CasoGatillo>;
  setSelectedCase: (caso: CasoGatillo) => void;
  setMarker: (markerName: string) => void;
  selected: string | null;
};

const GatilloMarkers = ({
  gatillos,
  setSelectedCase,
  setMarker,
  selected,
}: Props) => {
  const renderMarker = (gatillo: CasoGatillo) => {
    const {
      properties: { Contador },
      geometry: { coordinates },
    } = gatillo;
    const [longitude = 0, latitude = 0] = coordinates;
    const gatilloStyle = `${styles.gatillo} ${selected === Contador ? styles.selected : ""}`;
    return (
      <Marker
        key={Contador}
        longitude={longitude}
        latitude={latitude}
        onClick={() => {
          setMarker(Contador);
          setSelectedCase(gatillo);
        }}
      >
        <Icons icon={"reportes"} className={gatilloStyle} iconSize={"1rem"} />
      </Marker>
    );
  };

  return <>{gatillos.features.map((gatillo) => renderMarker(gatillo))}</>;
};

export default GatilloMarkers;
