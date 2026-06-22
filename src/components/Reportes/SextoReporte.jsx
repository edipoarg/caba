import styles from "./SextoReporte.module.css";
import { MdWarning, MdFmdBad } from "react-icons/md";
import { LuRefreshCwOff } from "react-icons/lu";
import { RxEyeNone } from "react-icons/rx";
import { TbWorldOff, TbUserQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";

const SextoReporte = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          6to Reporte sobre la Violencia Policial en la Ciudad de Buenos Aires
        </h1>
        <p className={styles.dateText}>Agosto de 2025</p>
        <p className={styles.introText}>
          Una publicación del <strong>Mapa de la Policía</strong>
        </p>
        <p className={styles.introText}>
          El Mapa de la Policía es una herramienta ciudadana que propone
          construir una{" "}
          <strong>RED DE CUIDADOS CONTRA LA VIOLENCIA POLICIAL,</strong>
          integrada por colectivos y personas de diversa procedencia y
          condición. El principal objetivo de esta iniciativa es{" "}
          <strong>VISIBILIZAR EL ABUSO</strong> de las fuerzas de seguridad para
          evitar que se naturalice.
        </p>
      </header>

      <section className={`${styles.section} ${styles.sectionFirst}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.titlesGroup}>
            <p className={styles.introText}>Geolocalización de casos</p>

            <p className={styles.dateText}>53 nuevos casos de violencia</p>
            <p className={styles.dateText}>2 nuevos casos de gatillo fácil</p>
            <Link to="/" className={styles.instagramButton}>
              Ver mapa
            </Link>
          </div>
          <img
            src="https://static.wixstatic.com/media/0f4ca0_efb3332b568848f3b6b1752f433c42f4~mv2.jpg/v1/fill/w_1536,h_1175,al_c,q_85,enc_avif,quality_auto/mapa%20casos.jpg"
            alt="Geolocalizacion casos imagen"
            className={styles.sectionImageHeader}
          />
        </div>
      </section>

      {/* Primera parte */}
      <section
        id="parte-1"
        className={`${styles.section} ${styles.sectionFirst}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.titlesGroup}>
            <h2 className={styles.sectionTitle}>Primera parte</h2>
            <h3 className={styles.articleTitle}>Filmar aunque les duela</h3>
          </div>
          <img
            src="https://static.wixstatic.com/media/0f4ca0_c8a431ae48a2409e868ed12186a81ca7~mv2.jpg/v1/fill/w_1536,h_1024,al_c,q_85,enc_avif,quality_auto/PARTE%201.jpg"
            alt="Primera parte imagen"
            className={styles.sectionImageHeader}
          />
        </div>
        <div className={styles.firstPartContainer}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              El jueves 19 de junio a la noche Morena y sus amigos estaban en el
              skatepark del Parque Alberdi, en el barrio de Mataderos. De
              repente, pasó un patrullero de la Policía de la Ciudad y bajaron
              varios agentes. La comisaría 9A está a menos de 200 metros, sobre
              la calle Lisandro de la Torre, y es común que cada tanto paren a
              ver qué hacen los jóvenes. Aquella noche, uno de ellos tenía porro
              en la mochila, lo que motivó su detención y averiguación de
              antecedentes. Los pibes saben que para que no ocurran excesos
              conviene filmar. Y lo hacen por dos razones: para que quede un
              registro del procedimiento; y para que el policía no se vaya de
              mambo.
            </p>
            <p className={styles.text}>
              A los ojos de los amigos de Morena, la detención estaba siendo muy
              violenta. Por eso uno de ellos atinó a filmar, para lo cuál se
              ubicó a unos 7 u 8 metros de donde acostaron a su amigo boca abajo
              para esposarlo. Otro efectivo que arribó en un segundo móvil como
              refuerzo, portando armas largas desenfundadas, los agredió al
              grito de “no obstruyan el procedimiento”, aunque era obvio que
              quien registraba no estaba obstruyendo. Se trata del agente Mauro
              Prieto, quien además dijo: “¡Cierren el orto! ¿O quieren que los
              detenga también por obstrucción de procedimiento policial?”. Luego
              agregó: “¡entonces no rompan las pelotas y nada de boconear!”. Las
              imágenes muestran cómo Prieto torea al grupo de pibes, mientras
              varios efectivos lo respaldan. Y empuja con violencia a una de las
              muchachas, lo que motiva que el novio se involucre y la situación
              escale.
            </p>
          </div>
          <div className={styles.videoArea}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.instagram.com/reel/DMGgEFESGjg/embed"
                title="Instagram Reel Mockup"
                allow="encrypted-media"
                frameBorder="0"
              />
            </div>
            <a
              href="https://www.instagram.com/reel/DMGgEFESGjg/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              Ver video en Instagram
            </a>
          </div>
        </div>
        <p className={styles.text}>
          Alguien sigue filmando. Prieto lo nota, avanza sobre la persona y en
          primer plano pregunta eufórico: “¿Y usted por qué filma, caballero?”.
          “Siempre se filma,” responde el camarógrafo. Prieto lo tira al piso y
          le pone las esposas violentamente. Otro joven toma la posta de la
          cobertura y permite continuar el registro. En el acta de detención de
          ambos figura “tenencia de estupefacientes”, aunque uno de los dos fue
          detenido por filmar. Lo cuál demuestra que las fuerzas de seguridad
          saben muy bien que filmar no es delito. Los pibes presentaron la
          denuncia por los abusos en el operativo, pero en la comisaría no
          quisieron tomarla porque supuestamente “no iba a prosperar”.
        </p>
        <p className={styles.text}>
          Al resistir la impunidad con la que la Policía de la Ciudad violenta y
          verduguea a les pibes, Morena y sus amigos permitieron que este hecho
          no quede impune, que se conozca públicamente y nos obliga a pensar
          cómo es posible enfrentarlo. La organización colectiva puede tener
          éxito contra los abusos de las fuerzas de seguridad, construir verdad
          y exigir justicia.
        </p>
      </section>

      {/* Segunda parte */}
      <section
        id="parte-2"
        className={`${styles.section} ${styles.sectionSecond}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.titlesGroup}>
            <h2 className={styles.sectionTitle}>Segunda parte</h2>
            <h3 className={styles.articleTitle}>Las razias de Jorge Macri</h3>
          </div>
          <img
            src="https://static.wixstatic.com/media/0f4ca0_d2b3803f3d4e45f0b5ac8fd9cd35e753~mv2.jpg/v1/fill/w_1536,h_1024,al_c,q_85,enc_avif,quality_auto/parte%202.jpg"
            alt="Segunda parte imagen"
            className={styles.sectionImageHeader}
          />
        </div>
        <p className={styles.text}>
          Las prácticas que vamos a identificar no son novedosas. Aunque las
          conocemos hace años, su articulación, frecuencia e intensidad se
          tornaron llamativas en el último tiempo. Mientras el macrismo
          promociona sus cometidos de “orden” y “limpieza” del espacio público,
          a la policía se le da rienda suelta para perseguir a quienes, a sus
          ojos, no son bienvenidos. Se trata de un plan coordinado entre el
          poder ejecutivo, el sistema judicial y las fuerzas de seguridad para
          desplegar prácticas represivas masivas, con apariencia de legalidad.
        </p>
        <p className={styles.text}>
          Nos referimos a las detenciones al voleo y la violencia desmedida en
          contextos de manifestación; las requisas a cartoneros y las amenazas
          de multas desorbitantes por revisar la basura; los desmantelamientos
          de las ferias y los secuestros de mercadería a manteros o vendedores
          ambulantes; y el empleo de estrategias ilegítimas (por ejemplo, hacer
          pasar la reiteración de una supuesta contravención como delito de
          desobediencia) para perseguir al trabajo sexual callejero. Cada una de
          estas estrategias son ejemplos corrientes de un despliegue abusivo a
          escala metropolitana.
        </p>
        <p className={styles.text}>
          El modus operandi incluye la apertura de expedientes penales y
          contravencionales que funcionan como pretexto para justificar estos
          operativos y dotarlos de un “manto de legalidad”. La pobre repercusión
          legal que suelen registrar estos casos demuestra que la verdadera
          protagonista no es la justicia, sino la violencia policial y sus
          consecuencias, tanto físicas como simbólicas. El objetivo es evidente,
          socialmente direccionado e indudablemente político: habilitar
          intervenciones masivas y sistemáticas para desplazar y disciplinar a
          sus destinatarios, que en su mayoría son manifestantes, reporteros y
          trabajadores de la economía popular.
        </p>
        <p className={styles.text}>
          Las consecuencias, además, no se agotan en el caso particular. El aval
          institucional hacia estos procedimientos, sumado a su continuidad y
          publicidad, también operan desde lo simbólico y promueven un clima de
          hostilidad e intimidación constante contra los sujetos apuntados. El
          Gobierno de la Ciudad emula de esta manera al Ejecutivo nacional en su
          intento por consolidar una gobernabilidad urbana en torno a la
          crueldad.
        </p>
      </section>

      {/* Tercera parte */}
      <section
        id="parte-3"
        className={`${styles.section} ${styles.sectionThird}`}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.titlesGroup}>
            <h2 className={styles.sectionTitle}>Tercera parte</h2>
            <h3 className={styles.articleTitle}>
              Sobre la reforma de las Leyes Orgánicas de las fuerzas de
              seguridad federales
            </h3>
          </div>
          <img
            src="https://static.wixstatic.com/media/0f4ca0_29080874779d407698255c70643a7a3a~mv2.jpg/v1/fill/w_1536,h_1024,al_c,q_85,enc_avif,quality_auto/parte%203.jpg"
            alt="Tercera parte imagen"
            className={styles.sectionImageHeader}
          />
        </div>
        <p className={styles.text}>
          La reforma en las leyes orgánicas de las fuerzas federales de
          seguridad impulsada por la ministra Patricia Bullrich provoca un
          radical cambio de enfoque para la seguridad pública: implica el pasaje
          de la seguridad de las personas, a la seguridad del Estado.
        </p>
        <div className={styles.spotifyWrapper}>
          <iframe
            src="https://open.spotify.com/embed/episode/6K6X1HEV46dYTi99DPmmVA"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Podcast Mapa de la Policía"
            style={{ borderRadius: "12px" }}
          />
        </div>
        <p className={styles.text}>
          En este podcast del Mapa de la Policía en FM La Tribu profundizamos el
          análisis sobre la reforma de la Policía Federal (PFA).
          <br />
          En primer lugar, estos cambios se realizaron a través de un Decreto de
          Necesidad y Urgencia (DNU) publicado casi al finalizar el plazo fijado
          por la Ley Bases, que delegó sus facultades legislativas al Poder
          Ejecutivo Nacional por el período de un año. Sin embargo, la Seguridad
          Nacional no estaba incluida en la emergencia ni en la necesidad. Por
          ende, las reformas realizadas exceden la materia delegada que
          estrictamente refiere sobre la administración del Estado. Además, un
          DNU con facultades delegadas no puede modificar una ley.
          <br />
        </p>

        <p className={styles.text}>
          Por otra parte, cada Decreto asigna funciones y atribuciones a las
          instituciones policiales y penitenciarias utilizando expresiones
          condicionales (como supuestos o hipótesis) que permiten la toma
          discrecional de decisiones por parte del Ministerio de Seguridad
          Nacional, o del efectivo que intervenga. Esto desdibuja
          responsabilidades legales de las actuaciones policiales del Estado e
          introduce un amplio espacio para los grises.
          <br />
          Una de las modificaciones más inquietantes es la facultad para llevar
          adelante tareas de ciberpatrullaje e inteligencia, que hasta ahora
          estaban contenidas en decretos ministeriales y pasan a tener rango
          legal. Por otro lado, a la PFA se la faculta a detener “por
          averiguación de identidad” (cuestión que, mayoritariamente, se excluyó
          de las últimas reformas de los Código Procesales del país). Y aún más
          preocupante, a “registrar y calificar” a las personas dedicadas
          habitualmente a actividades que la policía debe reprimir. La
          indeterminación sobre quiénes serían estas personas otorga una amplia
          discrecionalidad que puede utilizarse de manera discriminatoria.
          También se habilita a realizar requisas y detenciones con o sin orden
          judicial de acuerdo a criterios poco específicos que dictamine el
          Ministerio de Seguridad Nacional o de la propia fuerza interviniente.
          <br />
        </p>

        <p className={styles.textSubtitle}>De la modernización ni me acuerdo</p>
        <div className={styles.boxList}>
          <div className={styles.boxItem}>
            <MdWarning className={styles.icon} />
            <p>
              A pesar de existir un consenso general acerca de que las leyes
              orgánicas de las Fuerzas de Seguridad debían ser reformadas, la
              forma y el contenido que incluyen las modificaciones propuestas
              por el Ministerio de Seguridad Nacional incumplen lo reglado en la
              Constitución y derechos contenidos en tratados internacionales
              sobre Derechos Humanos, ya que solo se modifican aspectos que
              habilitan el uso de las fuerzas para la represión y la cobertura
              legal necesaria para el cuidado de esas instituciones por parte
              del Ministerio de Seguridad Nacional.
            </p>
          </div>
          <div className={styles.boxItem}>
            <LuRefreshCwOff className={styles.icon} />
            <p>
              Los DNU no modernizan las formaciones iniciales ni las
              capacitaciones permanentes en delitos complejos transnacionales,
              como corresponde a una fuerza que se dedica a delitos federales.
            </p>
          </div>
          <div className={styles.boxItem}>
            <RxEyeNone className={styles.icon} />
            <p>
              No incluye controles que sean externos e independientes ya sean
              civiles, judiciales, o políticos sobre el accionar de sus
              miembros.
            </p>
          </div>
          <div className={styles.boxItem}>
            <TbWorldOff className={styles.icon} />
            <p>
              Debería incluir claramente las recomendaciones y tratados
              internacionales sobre el uso racional de la fuerza, las armas
              menos letales y el control civil sobre las intervenciones en
              materia de seguridad.
            </p>
          </div>
          <div className={styles.boxItem}>
            <TbUserQuestion className={styles.icon} />
            <p>
              Tampoco se establece el uso obligatorio de uniforme, armas
              registradas e identificación de cada miembro de la fuerza.
            </p>
          </div>
          <div className={styles.boxItem}>
            <MdFmdBad className={styles.icon} />
            <p>
              Quedan invisibilizados los aspectos de cuidado y tratamientos
              específicos sobre cuestiones antidiscriminatorias ni de género.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SextoReporte;
