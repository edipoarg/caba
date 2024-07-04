import { Marker } from "react-map-gl/maplibre";
import styles from "./ReportesMarkers.module.css";
import Icons from "../iconos/Icons";
import { CasoReportes, DataDeCasos } from "../../models/models";

type Props = {
  dataDeReportes: DataDeCasos<CasoReportes>;
  setSelectedCase: (caso: CasoReportes) => void;
  setMarker: (markerName: string) => void;
  selected: string | null;
};

const ReportesMarkers = ({
  dataDeReportes,
  setSelectedCase,
  setMarker,
  selected,
}: Props) => {
  const renderMarker = (casoReportes: CasoReportes) => {
    const {
      properties: { Contador },
      geometry: { coordinates },
    } = casoReportes;
    const [longitude = 0, latitude = 0] = coordinates;
    const reportesStyle = `${styles.reportes} ${selected === Contador ? styles.selected : "selected"}`;

    return (
      <Marker
        key={Contador}
        longitude={longitude}
        latitude={latitude}
        onClick={() => {
          setMarker(Contador);
          setSelectedCase(casoReportes);
        }}
      >
        <Icons icon={"reportes"} className={reportesStyle} iconSize={"1rem"} />
      </Marker>
    );
  };

  return (
    <>{dataDeReportes.features.map((reportes) => renderMarker(reportes))}</>
  );
};

export default ReportesMarkers;
