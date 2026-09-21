/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./Nosotros.module.css";
import Logos from "../logos/Logos";
import LogoMapaSmall from "../LogoMapa/Small/LogoMapaSmall";

const listaDeLogos = [
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_50d891e12601428797aaae22e2cf62e2~mv2.png/v1/fill/w_709,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CELS.png",
    link: "https://violenciapolicial.org.ar/",
    name: "cels",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_60cc128a42c04e25a01af532b67db0c3~mv2.png/v1/fill/w_322,h_88,al_c,lg_1,q_85,enc_auto/crisis.png",
    link: "https://revistacrisis.com.ar/",
    name: "crisis",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_8f89dfe097bc4e83b57cf850b0838a11~mv2.png/v1/fill/w_688,h_275,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vicki%20Freire%201.png",
    link: "https://www.legislatura.gob.ar/legislador/freirevictoria",
    name: "viki",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_398fde56198244a296fa90ac1d6590f9~mv2.png/v1/fill/w_456,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CORREPI.png",
    link: "https://www.correpi.org/",
    name: "correpi",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_51f61bc8190d47d2b1e7550dc4c4fc7a~mv2.png/v1/fill/w_405,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MTE.png",
    link: "https://mteargentina.org.ar/",
    name: "mte",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_ae9203d7f561461f93c6d0b287d559cb~mv2.png/v1/fill/w_753,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NUESTRAMERICA.png",
    link: "https://movimientonuestraamerica.wordpress.com/about/",
    name: "nuestra america",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_4b35270f3c4642f688433525db4f373b~mv2.png/v1/crop/x_0,y_166,w_945,h_614/fill/w_716,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PUNTO%20DE%20FUGA.png",
    link: "https://www.instagram.com/puntodefuga.nm/",
    name: "punto de fuga",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_ae963933b86b429d80e223224ef22aed~mv2.png/v1/crop/x_0,y_0,w_1442,h_936/fill/w_716,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LA%20TRIBU%20radio.png",
    link: "https://fmlatribu.com/",
    name: "la tribu",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_9d95a54f8e12467d8cf96ba59051be55~mv2.png/v1/fill/w_873,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/El%20grtio%20del%20sur.png",
    link: "https://elgritodelsur.com.ar/",
    name: "grito del sur",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_6d2e4028de77422e8f09a67434f37b25~mv2.png/v1/fill/w_520,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EMERGENTES.png",
    link: "https://www.instagram.com/emergente.pp",
    name: "emergentes derecho",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_a4b9777e03a44fe2a879df7abe398a10~mv2.png/v1/fill/w_490,h_432,al_c,lg_1,q_85,enc_auto/ACVI.png",
    link: "https://www.acvi.org.ar/",
    name: "acvi",
  },
];

const Nosotrxs = () => {
  return (
    <section className={styles.nosotrxsContainer}>
      {/* INTRO */}
      <section className={styles.header}>
        <div className={styles.box}>
          <h3 className={styles.deco}>////////////////////</h3>

          <LogoMapaSmall />

          <section className={styles.sloganContainer}>
            <h5 className={styles.slogan}>
              RED DE CUIDADOS CIUDADANOS CONTRA LA VIOLENCIA POLICIAL
            </h5>
          </section>
        </div>

        <section className={styles.bajadaNosotrxs}>
          <p className={styles.bajada}>
            El Mapa de la Policía es una herramienta de cuidados ciudadanos para
            contrarrestar la violencia policial. En un contexto de creciente
            deterioro social y de un avance represivo que amenaza los consensos
            democráticos, el Mapa apuesta a la organización desde abajo para
            denunciar y combatir la crueldad. Nuestra iniciativa parte de una
            intuición clave: democratizar la información y asumir el compromiso
            de dar testimonio es hoy un arma fundamental para enfrentar la
            opacidad de los poderes. Somos una red de personas y organizaciones
            que queremos construir estrategias novedosas de lucha por los
            derechos humanos.
          </p>
          <button
            type="button"
            className={styles.saberMas}
            onClick={() => {
              document
                .getElementById("sobre-el-mapa")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SABER MÁS ↓
          </button>
        </section>
      </section>

      {/* ORGANIZACIONES */}
      <div className={styles.thinLine} />

      <Logos logos={listaDeLogos} />

      <div className={styles.develop}>
        <h4>DESARROLLADA X EDIPO</h4>
      </div>

      {/* NUEVO BLOQUE */}
      <section id="sobre-el-mapa" className={styles.contentBlock}>
        <h2 className={styles.contentTitle}>
          APUNTES SOBRE LA POLÍTICA DEL MAPA DE LA POLICÍA
        </h2>

        <h3 className={styles.contentYear}>AÑO 2026.</h3>

        <div className={styles.contentBody}>
          <p className={styles.contentText}>
            El Mapa de la Policía es una{" "}
            <strong>
              red de cuidados colectivos contra la violencia policial
            </strong>
            , que utiliza su <strong>plataforma digital</strong> para ejercer un{" "}
            <strong>control ciudadano de las fuerzas de seguridad</strong>.
            Nació en el año 2022 y está compuesto por diferentes colectivos así
            como por personas que no pertenecen a ninguna organización. Algunas
            de ellas son: el Equipo de Investigación Política, el CELS, el MTE,
            la Revista Crisis, Argentina Humana, la CORREPI, Punto de Fuga,
            ACVI, FM La Tribu, La Mella, Enfoco, DOCA, Cooperativa Cambalache,
            entre otros.
          </p>

          <p className={styles.contentText}>
            El <strong>objetivo original</strong> es enfrentar a la ultraderecha
            en el terreno donde se torna más desafiante: por ejemplo,{" "}
            <strong>en el consenso</strong> que ha logrado construir en la
            sociedad sobre{" "}
            <strong>cuestiones claves como el punitivismo</strong>. Ese sentido
            común represivo con fuerte contenido elitista ya estaba presente en
            los gobiernos porteños de Mauricio Macri y Horacio Rodríguez
            Larreta, creadores de la policía más reciente del país y una de las
            más violentas. El punto de partida fue{" "}
            <strong>dejar de escandalizarnos o quejarnos</strong> para poner
            manos a la obra y tratar de{" "}
            <strong>construir una herramienta</strong> que nos permita{" "}
            <strong>organizarnos, investigar e intervenir</strong> contra la
            crueldad. No está fácil, pero vale la pena.
          </p>

          <p className={styles.contentText}>
            Tenemos una{" "}
            <a
              href="https://mapadelapolicia.com/"
              target="_blank"
              rel="noreferrer"
            >
              página web
            </a>{" "}
            donde se puede acceder a <strong>información pública</strong>{" "}
            (aunque no publicada) sobre los jefes policiales, las comisarías y
            las distintas divisiones que actúan en el ámbito de la ciudad de
            Buenos Aires. La intención es{" "}
            <strong>ponerle rostro al poder policial</strong>, nombre y
            apellido, conocer cómo funciona, qué armas utilizan, cuáles son sus
            protocolos y obligaciones, para poder enfrentar con eficacia la{" "}
            <strong>violencia que despliegan</strong>. No se trata de
            estigmatizar a la cana, de hecho nos interesa también hablarles a
            los propios agentes. Pero sí queremos dejar claro que{" "}
            <strong>no toleramos una policía autoritaria</strong> y que actúe
            fuera de los parámetros democráticos.
          </p>

          <p className={styles.contentText}>
            La plataforma también cuenta con un{" "}
            <a
              href="https://mapadelapolicia.com/#/denuncia"
              target="_blank"
              rel="noreferrer"
            >
              formulario online
            </a>{" "}
            para reportar casos concretos de abuso policial. Este mecanismo ha
            sido bien interesante para convocar a cualquier ciudadano o
            ciudadana a <strong>tomar la palabra</strong> como testigo ocasional
            de un hecho de violencia policial, lo que abre el campo de
            posibilidades ya que no recae sólo en las víctimas la
            responsabilidad de denunciar (quienes se exponen mucho al
            visibilizar las agresiones padecidas). Como resultado, cada vez más
            gente filma y envía sus registros, activándose así una inteligencia
            colectiva muy potente.
          </p>

          <p className={styles.contentText}>
            En este sentido, otra sección del Mapa son los{" "}
            <a
              href="https://mapadelapolicia.com/#/recursos"
              target="_blank"
              rel="noreferrer"
            >
              manuales e instructivos
            </a>{" "}
            que explican de manera ágil y fácil{" "}
            <strong>qué hacer ante diferentes circunstancias</strong>: cómo
            reaccionar ante una detención, cuáles son los criterios a tener en
            cuenta para ir a una marcha, cómo filmar sin regalarse, entre otros.
            También hemos convocado al periodismo a renovar el compromiso de{" "}
            <a
              href="https://mapadelapolicia.com/#/investigaciones"
              target="_blank"
              rel="noreferrer"
            >
              investigar a la institución policial
            </a>
            , relanzando una tradición muy importante en nuestro país que se ha
            ido debilitando como consecuencia de la crisis epocal del
            periodismo.
          </p>

          <p className={styles.contentText}>
            Cuando asumió el gobierno libertario, en diciembre de 2023, ya
            teníamos un año y medio de experiencia, lo que nos vino bárbaro para
            reaccionar rápido ni bien la represión a la protesta se hizo
            costumbre. Entonces decidimos aplicar un método utilizado por las
            vanguardias periodísticas en distintos lugares del mundo, sobre todo
            en contextos de guerra, que se llama{" "}
            <strong>arquitectura forense</strong> y consiste en reunir
            masivamente i<strong>mágenes de diferentes procedencias</strong>{" "}
            (coberturas de medios masivos de comunicación, registros de
            celulares, material de fotoreporterxs, cámaras de monitoreo urbano),
            que luego se <strong>sincronizan y analizan</strong> con métodos
            informáticos, lo cual nos permite reconstruir con bastante exactitud
            qué fue lo que pasó. Para hacerlo bien hay que{" "}
            <strong>organizarse</strong>, por eso convocamos a{" "}
            <strong>coberturas colaborativas</strong> cuando hay movilizaciones
            grandes y desplegamos <strong>campañas en redes</strong> para
            conseguir imágenes de sucesos específicos.
          </p>

          <p className={styles.contentText}>
            La idea es conocer cómo reprimen los gobiernos, para denunciarlos
            públicamente a través de un <strong>uso</strong>{" "}
            <strong>estratégico del lenguaje audiovisual</strong>, construyendo
            una <strong>verdad colectiva</strong> que desarma la mentira del
            poder dejándolos, a veces, en ridículo. Y también para construir{" "}
            <strong>pruebas judiciales</strong> que nos permitan sentar las
            bases de <strong>una justicia por venir</strong>, cuando los vientos
            cambien (porque van a cambiar, ¡y entonces la van a pagar!).
          </p>

          <p className={styles.contentText}>
            La primera reconstrucción que hicimos fue en agosto de 2023, para
            mostrar la brutal intervención de un agente policial en la muerte
            del militante Facundo Molares, durante un pequeño acto de protesta
            en el Obelisco porteño. En septiembre de 2024, durante la
            manifestación contra el veto jubilatorio, logramos mostrar cuál
            había sido el agente policial que gaseó a <strong>Fabricia</strong>,
            una niña de 10 años, y el video se viralizó. Se trata del policía
            federal Cristian Rivaldi, quien actualmente está procesado a la
            espera de la elevación a juicio.
          </p>

          <p className={styles.contentText}>
            La reconstrucción del disparo a <strong>Pablo Grillo</strong> que
            hicimos al día siguiente de la marcha del 12 de marzo de 2025 en el
            Congreso, es quizás el aporte más conocido hasta el momento. Todavía
            no habían pasado 24 horas cuando publicamos el video que demostraba
            que la agresión fue totalmente irregular, dejando en evidencia la{" "}
            <strong>mentira de Bullrich</strong> sobre el suceso. Cuatro días
            después publicamos un segundo video donde determinamos el nombre y
            apellido del efectivo que casi termina con la vida de Pablo: el
            gendarme Héctor Jesús Guerrero. Tiempo después, gracias a la
            participación del Mapa en las causas judiciales, pudimos reconstruir
            también cuál fue el agente que le disparó en el ojo a{" "}
            <strong>Jonathan Navarro</strong>: el prefecto Sebastián Emanuel
            Martínez. Ambos efectivos ya están siendo procesados. A partir de
            este hito, las reconstrucciones se multiplican y han comenzado a
            hacerse costumbre.
          </p>

          <p className={styles.contentText}>
            Pero queremos ir más allá: no alcanza sólo con denunciar a los
            autores materiales, es preciso{" "}
            <strong>apuntar a los responsables políticos</strong>, porque
            resulta evidente que las fuerzas de seguridad dispararon violando
            los protocolos de uso del armamento empleado, siguiendo las órdenes
            del comando unificado a cargo de la ministra{" "}
            <strong>Patricia Bullrich.</strong> Le pedimos al poder judicial que
            actúe con valentía, para ponerle freno a un atropello estatal que se
            torna sistemático.
          </p>

          <p className={styles.contentText}>
            Por otra parte, la violencia no es solo una cualidad de la policía
            porteña y las fuerzas de seguridad federales, sino que está presente
            en prácticamente todo el territorio nacional. Por eso el Mapa
            comenzó a replicarse y ya en 2024 surgió también en{" "}
            <strong>La Plata</strong>, donde la bonaerense hace de las suyas.
            Para fines del 2025 se lanzó en <strong>Córdoba</strong> y en{" "}
            <strong>San Miguel de Tucumán</strong>. Hay otras ciudades y
            provincias en donde se está trabajando en ese sentido, como Rosario,
            Chubut, Mar del Plata y Río Negro. Nuestra propuesta es que se
            multiplique pero sin paracaidismo, lo cual requiere de una trama de
            colectivos y personas con presencia en cada territorio que lo
            impulse, para dar respuesta a las problemáticas locales.
          </p>

          <p className={styles.contentText}>
            A partir de la visibilidad que ha tenido la iniciativa y en el marco
            del aniversario número 50 del golpe militar de 1976, vale la pena
            pensar cómo se inscribe el Mapa en esa{" "}
            <strong>gran tradición</strong> que constituye el movimiento de la{" "}
            <strong>memoria,</strong> la <strong>verdad</strong> y la{" "}
            <strong>justicia</strong> en la Argentina. Nos sentimos parte de ese
            noble linaje, y al mismo tiempo necesitamos{" "}
            <strong>abrir nuevos horizontes</strong> posibles. Concebimos al
            Mapa como{" "}
            <strong>un organismo de derechos humanos de nuevo tipo</strong>: una
            renovada apuesta por la militancia, que concibe a “la política” como
            una herramienta en manos del pueblo y no solo ni fundamentalmente
            como algo que pasa en las instituciones.
          </p>

          <p className={styles.contentText}>
            Entre los elementos de innovación podrían mencionarse: la{" "}
            <strong>utilización sistemática de tecnologías digitales</strong>{" "}
            para ejercer un control social de las fuerzas de seguridad; la
            denuncia de la <strong>represión del presente</strong> y no solo del
            pasado, lo que abre la posibilidad de una eficacia singular en la
            lucha contra <strong>el fascismo contemporáneo;</strong> la vocación
            de i<strong>nterpelar especialmente a la juventud</strong>; y la
            articulación de{" "}
            <strong>multiplicidad de saberes y habilidades</strong> en una
            dinámica de cooperación y permanente aprendizaje.
          </p>

          <p className={styles.contentText}>
            Desde su fundación, el Mapa fue concebido como una red de colectivos
            y personas de distintas procedencias, abierta a la participación de
            quienes quieran sumarse y con un apego muy fuerte a valores como la
            autonomía, la horizontalidad y la vocación por ser transversales.{" "}
            <strong>Autonomía</strong> respecto de cualquier estructura que
            pretenda cooptar a este experimento colectivo, limitando su
            capacidad de autodeterminación y por lo tanto su potencia política.{" "}
            <strong>Horizontalidad</strong> para evitar los típicos
            verticalismos que impone la lógica del poder, porque creemos
            realmente en la igualdad de las inteligencias y en la fuerza que
            tiene la diversidad. <strong>Transversalidad</strong> porque es
            fundamental que el Mapa sea un herramienta útil para todos aquellos
            que luchan contra el poder represivo y no sólo para los de idéntico
            color político.
          </p>

          <p className={styles.contentText}>
            Hoy el capitalismo vuelve a ejercer desde el Estado una violencia
            exponencial para acallar a quienes{" "}
            <strong>
              no nos resignamos a que la injusticia sea algo natural
            </strong>
            . Pero nos inspira el ejemplo de las{" "}
            <strong>Madres de Plaza de Mayo</strong>, que salieron a la calle
            para <strong>resistir con dignidad</strong> en el peor momento que
            nuestra historia recuerde.
          </p>

          <p className={styles.contentText}>
            Desde el Mapa de la Policía estamos convencidos de que la única
            forma de cambiar esta realidad funesta es{" "}
            <strong>comprometerse</strong>.
          </p>

          <p className={styles.contentText}>
            Por eso queremos invitar a la ciudadanía a participar, a{" "}
            <strong>crear formas de lucha y organización</strong> que estén a la
            altura de los tiempos que corren. Uno de los desafíos más difíciles
            que tenemos consiste en{" "}
            <strong>ir más allá del lugar de víctima</strong>, en el que nos
            acomodamos durante demasiado tiempo.
          </p>

          <p className={styles.contentText}>
            Es imperioso corrernos de esa actitud pasiva y asumir el riesgo, sin
            regalarnos pero sin miedo.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Nosotrxs;
