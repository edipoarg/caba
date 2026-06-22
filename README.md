# Mapa de la Policia

# Guía de Arquitectura de Datos y Alta de Ciudades

Este documento detalla la estructura actual del proyecto, el formato obligatorio para los sets de datos y los pasos manuales necesarios para agregar o cambiar de ciudad en el mapa.

---

## 1. Estructura de Archivos y Carpetas (Data Layout)

Para mantener el proyecto organizado, separamos las configuraciones geográficas, los datos globales y los sets de datos locales de la siguiente manera:


src/
├── constants/
│   └── regiones/           <-- CONFIG: Coordenadas (center, zoom) de cada ciudad
└── data/
    ├── cargos.json         <-- GLOBAL: Datos de jefes/oficiales asociados 
    ├── mdp/
    │   └── casos.json      <-- Datos de Mar del Plata
    ├── caba/
    │   └── casos.json      <-- Datos de CABA
    └── [nueva-ciudad]/
        └── casos.json      <-- Datos de la nueva ciudad


constants/regiones/: Centraliza los parámetros de Leaflet (center y zoom) de cada localidad para no ensuciar los componentes con números fijos.

cargos.json (Global): Contiene la nómina general de personal policial, jerarquías y dependencias para cruzar datos sin importar la ciudad activa.

casos.json (Local): Cada ciudad maneja su propio archivo .json cerrado con sus marcadores (comisarías, hechos) específicos.

## 2. Formato Obligatorio de los Casos (Contador)

El sistema de tipado en TypeScript (models/casos.ts) e inyección de estilos CSS utiliza la propiedad Contador de cada marcador para identificar automáticamente qué tipo de caso es y pintarlo con su color correspondiente.

Cualquier dato nuevo DEBE respetar estrictamente el siguiente patrón de guiones:

[prefijo_ciudad]-[tipo_caso]-[número_identificador]

Identificadores de caso válidos (Segunda posición):

d ➔ Dependencia / Comisaría
g ➔ Gatillo Fácil
r ➔ Reporte de la comunidad

Ejemplo:
Mar del Plata - Comisaría 5: mdp-d-05
Mar del Plata - Hecho de Gatillo Fácil: mdp-g-102
Rosario - Reporte comunitario: ros-r-01

Nota: La lógica interna del código evalúa la posición central mediante c.properties.Contador.split("-")[1], por lo que el orden y los guiones son fundamentales para que no se rompan los validadores

## 3. Configuración en el Mapa (Estado Actual)

⚠️ IMPORTANTE: Actualmente, la aplicación no cuenta con una estrategia de enrutamiento por URL (ej: /mapa/mdp) ni botones en la interfaz para cambiar de ciudad de forma dinámica. 

Por el momento, la ciudad activa está hardcodeada en el código.

Pasos para cambiar de ciudad manualmente:
1. Configurar la Región (Si es nueva): Si la ciudad no existe en el sistema, primero agregá sus coordenadas (center y zoom) en el archivo correspondiente dentro de src/constants/regiones/.

2. Modificar Mapa.tsx: Andá a src/components/Landing/Mapa/Mapa.tsx y actualizá manualmente tanto la importación del JSON de datos como la constante geográfica que consume el <MapContainer>:

// 1. Cambiar el archivo de datos dinámicos
import datosCasos from "../../data/ciudades/mdp/casos.json"; 

// 2. Cambiar la configuración geográfica hardcodeada (traída de constants/regiones)
const regionActiva = REGIONES.marDelPlata;

El componente renderizará los datos mapeados usando la configuración centralizada:

<MapContainer 
  center={regionActiva.center} 
  zoom={regionActiva.zoom}
  // ... resto de props
>
  {/* Componentes internos del mapa */}
</MapContainer>


## 4. Checklist para Desarrolladores (Paso a Paso)
Si vas a subir los datos de una nueva ciudad al mapa, asegurate de tachar todos los puntos de esta lista:

[ ] Crear la carpeta de la ciudad en src/data/[nombre-ciudad]/ y guardar su casos.json.

[ ] Verificar que las propiedades Contador del JSON tengan el formato de guiones correcto (-d-, -g- o -r-).

[ ] Dar de alta el centro y zoom de la nueva ciudad en src/constants/regiones/.

[ ] Actualizar en Mapa.tsx el import del JSON y la constante de la regionActiva.