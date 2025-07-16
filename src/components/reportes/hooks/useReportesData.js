import { useEffect, useState } from "react";

export default function useReportesData() {
  const [state, setState] = useState({
    reportes: null,
    reconstrucciones: null,
    informesPDF: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    Promise.all([
      fetch("/data/informes.json").then((r) => r.json()),
      fetch("/data/reconstrucciones.json").then((r) => r.json()),
      fetch("/data/informesPDF.json").then((r) => r.json()),
    ])
      .then(([r1, r2, r3]) =>
        setState({
          reportes: r1.reportes,
          reconstrucciones: r2.reconstrucciones,
          informesPDF: r3.informes,
          loading: false,
          error: null,
        }),
      )
      .catch(() =>
        setState((prev) => ({
          ...prev,
          loading: false,
          error: "Error al cargar los datos.",
        })),
      );
  }, []);

  return state;
}
