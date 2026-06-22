const Podcast = () => {
  return (
    <div>
      <section>
        <h2>Escuchando en la Radio</h2>
        <p>Día: [DÍA]</p>
        <p>Hora: [HORA]</p>
        <p>En Radio La Tribu FM 88.7</p>
      </section>

      <section>
        <h2>Escuchá nuestros Podcast en Spotify</h2>
        <p>
          <a
            href="URL_DEL_CANAL_EN_SPOTIFY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="URL_DEL_ICONO_DE_SPOTIFY"
              alt="Icono de Spotify"
              width="50"
              height="50"
            />
            Spotify
          </a>
        </p>
      </section>
    </div>
  );
};

export default Podcast;
