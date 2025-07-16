import { useEffect, useRef } from "react";

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Cargar el script oficial de Instagram para embeds
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // El script automáticamente procesa los bloques con 'instagram-media' cuando se carga

    return () => {
      // Opcional: limpiar script si querés
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ maxWidth: "540px", margin: "auto" }}
      ref={containerRef}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver en Instagram
      </a>
    </blockquote>
  );
}
