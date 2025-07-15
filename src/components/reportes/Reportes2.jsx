import styles from "./Reportes.module.css";
import useReportesData from "./hooks/useReportesData";

import UltimoReporte from "./UltimoReporte";
import ReportesAnteriores from "./ReportesAnteriores";
import Reconstrucciones from "./Reconstrucciones";
import InformesPDF from "./InformesPDF";

export default function Reportes() {
  const { reportes, reconstrucciones, informesPDF, loading, error } =
    useReportesData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;
  if (!reportes?.length) return <p>No hay reportes disponibles.</p>;

  const sorted = [...reportes].sort((a, b) => a.id - b.id);
  const ultimo = sorted.at(-1);
  const anteriores = sorted.slice(0, -1);
  const ultimaRecon = reconstrucciones?.at(-1) ?? null;

  return (
    <div className={styles.gridContainer}>
      <UltimoReporte reporte={ultimo} />
      <ReportesAnteriores lista={anteriores} />
      <Reconstrucciones item={ultimaRecon} />
      <InformesPDF informes={informesPDF} />
    </div>
  );
}
