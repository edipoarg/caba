export interface RegionConfig {
  nombre: string;
  longitude: number;
  latitude: number;
  zoom: number;
  minZoom: number;
  maxBounds: [[number, number], [number, number]];
}

export const REGIONES_CONFIG: Record<string, RegionConfig> = {
  "mar-del-plata": {
    nombre: "Mar del Plata",
    longitude: -57.5575,
    latitude: -38.0055,
    zoom: 12,
    minZoom: 10,
    maxBounds: [
      [-57.75, -38.15],
      [-57.40, -37.85],
    ],
  },
  "caba": {
    nombre: "Ciudad Autónoma de Buenos Aires",
    longitude: -58.3816,
    latitude: -34.3037,
    zoom: 11,
    minZoom: 9,
    maxBounds: [
      [-58.7, -34.8],
      [-58.25, -34.43],
    ],
  },
};