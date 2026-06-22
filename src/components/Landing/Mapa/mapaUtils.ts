import type { Map } from "maplibre-gl";

/**
 * Filtra y oculta capas específicas de texto e iconos del mapa base
 * para reducir el ruido visual.
 */
export const limpiarCapasBase = (map: Map): void => {
  const layers = map.getStyle().layers;

  // Lista negra de elementos que queremos apagar
  const cosasABorrar = [
    "poi",       // Puntos de interés (locales, restoranes, etc.)
    "transit",   // Paradas de colectivos/subtes
    "aeroway",   // Textos de aeropuertos
    "park",      // Plazas chicas o parques
    // "place",    //
    "waterway",
    "transportation_name", // Borra el TEXTO (nombres) de todas las rutas, avenidas y calles
    "highway",
    "aerodrome",           // Borra aeródromos militares, privados o secundarios
    "airport"
  ];

  if (!layers) return;

  layers.forEach((layer) => {
    // Si la capa contiene texto o iconos nativos
    if (layer.type === "symbol") {
      const debeOcultarse = cosasABorrar.some((keyword) =>
        layer.id.toLowerCase().includes(keyword)
      );

      if (debeOcultarse) {
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
    }
  });
};