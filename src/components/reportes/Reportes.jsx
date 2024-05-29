import CaseCounter from "./CaseCounter";
import styles from "./Reportes.module.css";
import Icons from "../iconos/Icons";

const Reportes = () => {
  const numeroReporte = 4; // Definimos numeroReporte como una constante con el valor 4
  const fecha = "8 de Mayo 2024";
  const bajada = [
    "El 11 de julio se lanzó en la Legislatura porteña el Mapa de la Policía, herramienta digital que propone construir una RED DE CUIDADOS CONTRA LA VIOLENCIA POLICIAL.",
    "El principal objetivo de la iniciativa es VISIBILIZAR EL ABUSO para evitar que se naturalice.",
  ];
  const tituloSistematico =
    "La represión a la protesta del nuevo gobierno de ultraderecha";
  const tituloPolitico = "Autoboicot penitenciario";
  const subtituloPolitico = "Propuestas contrapopuestas de (in)seguridad";
  const singularImg =
    "https://static.wixstatic.com/media/0f4ca0_568735806ee749b588aae9358978fc13~mv2.jpg/v1/fill/w_1190,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gatillo-mayo-2024-x-panchopepe-PORTADA--WEB-CRISIS.jpg";
  const sistematicoImg =
    "https://static.wixstatic.com/media/0f4ca0_a9e3ab268e8d47ec9b7dfdb1d4de44b5~mv2.png/v1/fill/w_843,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/FOTO%202.png";
  const politicoImg =
    "https://static.wixstatic.com/media/0f4ca0_247700749b2a4ccd99714d5c8a48bcf7~mv2.png/v1/fill/w_843,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/FOTO%203.png";
  const otrasImg =
    "https://static.wixstatic.com/media/0f4ca0_f9d31c8352ae41d481dca01bd0666ad5~mv2.jpg/v1/fill/w_825,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_8782.jpg";
  return (
    <div className={styles.reportContainer}>
      {/* Parte Intro */}
      <section className={styles.indexContainer}>
        <section className={styles.index}>
          <section className={styles.reportData}>
            <h2>{numeroReporte}° reporte de violencia policial</h2>
            <h3>{fecha}</h3>
            <h5>{bajada}</h5>
            <section className={styles.subMenu}>
              <h5 className={styles.Button}>Metodología</h5>
              <h5 className={styles.Button}>Reportes Anteriores</h5>
            </section>
          </section>
          <section className={styles.reportMenu}>
            <div className={styles.reportItem}>
              <h3>Un caso singular</h3>
              <h5>Las balas del estado policial</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>Análisis de una práctica sistemática</h3>
              <h5>{tituloSistematico}</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>{tituloPolitico}</h3>
              <h5>{subtituloPolitico}</h5>
            </div>
          </section>
        </section>
        <section className="reportCases">
          <CaseCounter />
        </section>
      </section>

      {/* Casos Singulares */}
      <img src={singularImg} alt="" className={styles.singularImg} />

      <div className={styles.singularCaseContainer}>
        <h2 className={styles.singularTitle}>Un caso singular</h2>

        <div className={styles.singularPart1}>
          <h3 className={styles.singularSubTitle}>
            Las balas del estado policial
          </h3>
          <h4 className={styles.singularText}>
            Fidel Ignacio Corbalán, de 18 años, recibió tres disparos de arma de
            fuego aquella madrugada del 16 de marzo de 2024. Cayó al piso de
            espaldas en la esquina de Balcarce y Pasaje San Lorenzo, en el
            barrio de San Telmo, mientras a su alrededor un centenar de jóvenes
            y adolescentes corrían y se dispersaban por el estruendo de las
            balas. Marcelo Alejandro Díaz, inspector de la Comisaría Comunal 3B
            de la Policía de la Ciudad había terminado un servicio adicional en
            el Instituto Nacional de la Propiedad Industrial, a unas cuadras de
            aquella esquina, y se dirigía a su casa en un auto particular,
            vestido de civil. Cuando llegó a las inmediaciones, un número
            indeterminado de jóvenes rodeó el vehículo y lo forzó a frenar.
          </h4>
          <h4 className={styles.singularText}>
            Según se supo por testimonios, estaba recién concluida una fiesta a
            la que la mayoría había asistido. Había jóvenes que conversaban
            sobre la calle o la vereda, que hablaban por teléfono o bebían el
            resto de la cerveza que les quedaba en el vaso. Algunos de ellos
            -entre los que se señala a Fidel- en momentos previos a la llegada
            de Díaz, habían forzado la cerradura de un auto estacionado e
            intentado forzar el baúl de otro, aunque el dueño del vehículo -
            vecino del lugar- lo había impedido. El momento en que el Renault
            Sandero de Díaz aparece en escena quedó registrado en un video que
            forma parte de la prueba, en el marco de la investigación penal.
          </h4>
        </div>
      </div>
      <div className={styles.singularPart2}>
        <Icons icon="reportesAlert" className={styles.icons}></Icons>
        <h4 className={styles.singularTextBlack}>
          Díaz declaró que se abalanzaron sobre el automóvil, que intentaron
          abrir las puertas, que sentía las patadas y los golpes sobre el metal
          de su auto, que había dejado apenas unos centímetros baja la
          ventanilla y que por ahí, con los dedos, una persona había levantado
          el pestillo de seguridad e intentaba forzar su entrada al vehículo.
          Hasta aquí, lo que declaró Díaz coincide en líneas generales- con lo
          que muestran las imágenes.
        </h4>
        <h4 className={styles.singularTextBlack}>
          Después, según el oficial, en medio de ese forcejeo, pudo ver que otro
          otro de sus agresores que se encontraba delante, a la altura espejo
          retrovisor Fidel Corbalán- le apuntaba con un arma. El oficial ante la
          Justicia que tuvo que sacar la reglamentaria y dispararle. Lo hizo por
          ese breve espacio abierto de la ventanilla, el vidrio se vidrio se
          mantuvo intacto. Su pistola marca Bersa, modelo “Thunder”,
          semiautomática, calibre 9x19 mm emitió, al menos, tres disparos que
          dieron de frente contra el cuerpo de Fidel. Falleció, según la
          autopsia, por “múltiples lesiones de proyectil de arma de fuego y
          hemorragia interna”. Esas mismas balas, que traspasaron al joven en el
          hombro, el abdomen y el muslo izquierdo, hirieron a otros dos
          adolescentes, de 17 y 15 años, que corrieron por sus vidas. Ambos
          fueron llevados al Hospital Argerich, donde sus lesiones quedaron
          registradas como “herida por proyectil de arma de fuego en muslo
          izquierdo y fractura expuesta de fémur izquierdo”, y un “roce de
          impacto de bala en el pie izquierdo”, respectivamente.
        </h4>
      </div>
      <div className={styles.singularPart3}>
        <Icons icon="securityCam" className={styles.icons}></Icons>
        <h4 className={styles.singularTextBlack}>
          Y sin embargo, del cúmulo de pruebas reunidas, de los testimonios
          recabados, de las filmaciones del momento del hecho o de las
          circunstancias previas al asalto al oficial, no surge la existencia de
          otra arma de fuego que no fuera la del agente de civil. Incluso, según
          valoró la Justicia, no había siquiera en el lenguaje corporal de los
          implicados, muchos de ellos hasta ahora desconocidos, actitud alguna
          que pudiera presumir la portación de un arma. En sus últimos momentos,
          en aquella filmación, Fidel tenía ambos brazos a los costados del
          cuerpo. No tuvo tiempo, siquiera, de correr.
        </h4>
        <h4 className={styles.singularTextBlack}>
          Con este motivo, el pasado 30 de abril, el Juzgado Nacional de Menores
          N° 6 decretó el procesamiento del inspector Marcelo Alejandro Díaz por
          el delito de homicidio agravado por el uso de un arma de fuego en
          perjuicio de Fidel Corbalán. Asimismo, en concurso ideal con el delito
          de lesiones graves y lesiones leves contra los dos adolescentes
          heridos. El magistrado decretó que fueron cometidos en exceso de la
          legítima defensa necesaria, en calidad de autor. No obstante, el
          procesamiento del agente no incluyó la prisión preventiva. Hasta el
          momento de la publicación del presente reporte, tampoco había sido
          relevado de sus funciones. El procesamiento fue apelado por la defensa
          del imputado, por lo que tampoco se encuentra firme ni se conoce
          cuándo la causa podría ser elevada a juicio oral. Por una parte de la
          querella, interviene el equipo jurídico del Programa de Asistencia y
          Patrocinio Jurídico a Víctimas de Delitos del Ministerio Público de la
          Defensa de la Nación.{" "}
        </h4>
        <h4 className={styles.singularTextBlack}>
          El crimen de Fidel Corbalán pone en discusión el estado policial, es
          decir, la posibilidad de que los agentes en actividad o retirados
          tengan permiso de portación de armas las 24 horas, tanto dentro como
          fuera del horario de trabajo y estando o no de uniforme. Aún sin estar
          firme, esta sentencia reconoció que hubo un uso inapropiado del arma
          de fuego, es decir, una incompetencia por parte del agente y un exceso
          o desproporción de la respuesta ante una agresión ilegítima. De esta
          manera, al igual que en otras causas, se revela la falta de
          capacitación y profesionalismo policial así como la ausencia de
          criterios de intervención basados en el principio racional del uso de
          la fuerza, un criterio de intervención que tiene un importante
          componente político. Precisamente, Fidel Corbalán moría por la bala
          policial a dos días de la publicación en el Boletín Oficial de la
          <a
            className={styles.link}
            href="https://www.boletinoficial.gob.ar/detalleAviso/primera/304736/20240314"
          >
            {" "}
            Resolución 125/2024
          </a>{" "}
          en la que la ministra de Seguridad de la Nación, Patricia Bullrich,
          flexibilizaba el uso de las armas de fuego para las fuerzas federales
          que, a partir de ese momento, pueden disparar sin identificarse en
          determinadas circunstancias. Esa política de Estado que legaliza el
          gatillo fácil permea también en los estrados judiciales. Así, el
          pasado 6 de mayo, la Cámara de Casación revocó la sentencia de Luis
          Chocobar, policía bonaerense que mató por la espalda a un adolescente
          que había asaltado y herido a un turista en el barrio de La Boca en
          2017. Chocobar, en ese momento había sido recibido y felicitado por
          Bullrich durante la gestión presidencial de Mauricio Macri.
        </h4>
        <h4 className={styles.singularTextBlack}>
          {" "}
          En la era libertaria, la ministra no solo festejó el fallo en sus
          redes sociales, también recibió en su despacho a otros agentes que
          mataron en el ejercicio de sus funciones. En el{" "}
          <a
            className={styles.link}
            href="https://www.instagram.com/reel/C6ulvPfAQZj/"
          >
            video publicado en su cuenta de Instagram
          </a>{" "}
          escribió: “A lo largo y ancho del país hay muchos Chocobar. Hoy los
          recibimos y reconocemos a cada uno de ellos”.{" "}
        </h4>
      </div>

      {/* Caso de Violencia Sistématica */}
      <section className={styles.headerBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleNumber}>2</h2>
          <h2 className={styles.sistematicoTitle}>
            Análisis de una práctica sistemática
          </h2>
          <h3 className={styles.sistematicoSubTitle}>
            La represión a la protesta del nuevo gobierno de ultraderecha
          </h3>
        </div>
        <img src={sistematicoImg} alt="" className={styles.img} />
      </section>
      <div className={styles.sistematicoContainer}>
        <div>
          <h4 className={styles.singularTextBlack}>
            Javier Milei asumió el comando del estado nacional el 10 de
            diciembre de 2023, al mismo tiempo que Jorge Macri se hacía cargo de
            la Ciudad de Buenos Aires. Ellos representan a las dos corrientes
            principales de la ultraderecha en nuestro país: el presidente lidera
            al partido libertario, mientras el jefe de gobierno porteño integra
            el PRO. A pesar de haber competido en las últimas elecciones, ambas
            fuerzas se aliaron con el objetivo de imponer una nueva
            gobernabilidad, basada en un dos principios fundamentales: llevar a
            cabo un <b>programa económico de tinte marcadamente antipopular,</b>{" "}
            neutralizar cualquier intento de resistencia ante el ajuste y las
            reformas pro mercado. Para cumplir con el segundo postulado están
            desplegando una nueva política de seguridad, que criminaliza la
            protesta social y hostiga a las organizaciones sociales,
            desconociendo los consensos democráticos establecidos luego de la
            última dictadura militar.
          </h4>

          <h4 className={styles.singularTextBlack}>
            La encargada de articular esta avanzada represiva es la ministra de
            Seguridad de la Nación Patricia Bullrich, candidata presidencial del
            partido de Macri. Su principal herramienta es el “Protocolo para el
            mantenimiento del orden público ante el corte circulación”, más
            conocido como{" "}
            <a
              className={styles.link}
              href="https://www.boletinoficial.gob.ar/detalleAviso/primera/300917/20231215?busqueda=1"
            >
              Protocolo antipiquetes,
            </a>{" "}
            publicado en el Boletín Oficial el 14 de diciembre, a solo cuatro
            días de iniciado el mandato. Como explica{" "}
            <a
              className={styles.link}
              href="https://www.cels.org.ar/web/2023/12/con-un-nuevo-protocolo-patricia-bullrich-quiere-impedir-la-protesta-social/"
            >
              un comunicado
            </a>{" "}
            del Centro de Estudios Legales y Sociales (CELS), la medida
            “establece que cualquier manifestación pública que se realice con
            cortes de calles o rutas constituye la comisión de un delito en
            flagrancia, lo que habilitará la actuación de las fuerzas de
            seguridad para desalojar o dispersar la protesta y para recabar
            información sobre sus participantes y organizaciones a los fines de
            perseguirlos penalmente. Al suprimir el derecho a elegir el modo y
            lugar de la protesta, anula por completo el derecho a manifestarse”.
          </h4>
          <div className={styles.sistemPart2}>
            <img src={otrasImg} alt="" className={styles.otrasImg} />

            <div>
              <h4 className={styles.singularText}>
                Al mismo tiempo, la ministra Bullrich desplegó una serie de
                iniciativas encaminadas a golpear directamente a las
                organizaciones populares, como la{" "}
                <a
                  className={styles.link}
                  href="https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-949-2023-395587/texto"
                >
                  Resolución 949/2023
                </a>{" "}
                que pretende cobrarle el costo de los operativos a quienes
                catalizan la protesta; o la habilitación de la línea 134 para
                que les manifestantes denuncien supuestas extorsiones, que luego
                serían judicializadas. Y en el mismo sentido, el gobierno
                nacional envió al Congreso diversas propuestas que buscan
                legislación represiva contra el derecho a manifestarse
              </h4>
              <h4 className={styles.singularText}>
                Como es lógico, la mayor parte de las manifestaciones y
                expresiones colectivas del descontento se desarrollan en la
                Ciudad de Buenos, sede del poder político, judicial, mediático y
                económico. Sin embargo, la Capital Federal cuenta con su propia
                normativa, que difiere con la diseñada desde el Ejecutivo
                Nacional. A continuación, presentamos la cronología de los
                operativos represivos desplegados de manera coordinada por las
                fuerzas de seguridad federales y porteñas desde la asunción del
                nuevo gobierno de derechas, con el objetivo de encontrar
                patrones y determinar su éxito y/o su fracaso
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className={styles.timeline}
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1CyVCS6vcIyl28B5ZU96CsE3ktTSOkOeG4aQ-8rm2nwo&font=Default&lang=en&initial_zoom=2&height=650"
        ></iframe>
        <a href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1CyVCS6vcIyl28B5ZU96CsE3ktTSOkOeG4aQ-8rm2nwo&font=Default&lang=en&initial_zoom=2&height=650">
          Ir
        </a>
      </div>
      <div>
        <div className={styles.sistemPart3}>
          <Icons icon="siren" className={styles.icons2}></Icons>

          <h2>Conclusiones provisorias:</h2>
          <h4 className={styles.singularTextBlack}>
            Como hemos visto a lo largo de la cronología, el ritmo y la magnitud
            de la protesta social durante los cinco meses que cubre este Reporte
            ha sido impresionante. Sin temor a equivocarnos, se trata del mayor
            nivel de movilización en las últimas dos décadas. Pero también fue
            notable y por momentos desproporcionada la dimensión de los
            operativos policiales desplegados por el Ministerio de Seguridad de
            la Nación, y sus estrategias de amedrentamiento.{" "}
          </h4>
          <div className={styles.sistemObjetivos}>
            <h4 className={styles.singularTextBlack}>
              El gobierno de ultraderecha se propone un doble objetivo:
            </h4>
            <h4 className={styles.singularTextBlack}>
              infundir el miedo en quienes se ven afectados por las agresivas
              políticas del oficialismo, para disuadirlos y que no se movilicen;{" "}
            </h4>
            <h4 className={styles.singularTextBlack}>
              golpear a las organizaciones populares, históricamente encargadas
              en nuestro país de catalizar y encauzar la protesta.
            </h4>
          </div>
          <h4 className={styles.singularTextBlack}>
            A partir del seguimiento realizado por el Archivo Histórico de la
            Represión en Argentina, concluimos que el primer propósito ha
            fracasado, al menos por ahora. Tras un primer momento en el que la
            prepotencia represiva parecía imponerse, especialmente durante la
            última semana de enero en ocasión del tratamiento de la primera Ley
            Ómnibus en el Congreso, la violencia estatal fue disminuyendo y la
            aplicación del Protocolo antipiquetes se relajó, mientras las
            protestas crecieron en intensidad y volumen.
          </h4>
          <h4 className={styles.singularTextBlack}>
            Son múltiples los indicios que nos llevan a arriesgar este balance
            parcial. También son variadas las causas. Entre ellas, podríamos
            apuntar los cortocircuitos evidentes generados entre las autoridades
            de Seguridad nacionales y las de la Ciudad, y la poca sinergia entre
            las fuerzas federales y porteñas.{" "}
          </h4>
          <h4 className={styles.singularTextBlack}>
            Por otra parte, el costo de implementar casi diariamente semejante
            movilización policial no solo se mide financieramente, sino también
            en la distracción de efectivos que implica para su utilización en
            los territorios donde la violencia social aumenta. Anotemos al pasar
            que la iniciativa de cobrarle dichos operativos a las organizaciones
            que participan de la protesta no pasó de ser una performance
            meramente intimidatoria.
          </h4>
        </div>
        <div className={styles.sistem4}>
          <Icons icon="document" className={styles.icons}></Icons>

          <h4 className={styles.singularText}>
            Por último, hay que tener en cuenta también las negativas
            implicancias institucionales de violar ciertos parámetros
            democráticos, aún si buena parte del sistema político, de la casta
            empresarial y de la constelación mediática, apoyan con entusiasmo la
            vocación estatal de disciplinamiento. Más que la atención de la
            Comunidad Internacional, expresada en la{" "}
            <a
              className={styles.link}
              href="https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-949-2023-395587/texto"
            >
              carta de preocupación
            </a>{" "}
            que enviaron tres Relatores de la ONU, el síntoma de ese relativo
            revés es la incapacidad de aprobar leyes en el Parlamento y el
            naufragio del Pacto de Mayo.
          </h4>
          <h4 className={styles.singularText}>
            Donde quizás el gobierno sí haya logrado cierto éxito, aunque el
            desenlace en este rubro aún está por verse, es en su intento por
            maniatar a las estructuras organizacionales del campo popular. La
            criminalización judicial desatada durante los primeros días de mayo
            contra las organizaciones sociales significó un salto de escala en
            la persecución. Es preciso crear las herramientas legales y
            narrativas necesarias para desarmar esta ofensiva disciplinadora.
          </h4>
          <h4 className={styles.singularText}>
            La casi totalidad de los eventos mapeados en este Reporte pertenecen
            al Área Metropolitana de Buenos Aires (AMBA), porque es allí donde
            se concentró la conflictividad durante los primeros cinco meses de
            la gestión ultraderechista, y porque nuestra plataforma ciudadana se
            ocupa por ahora de monitorear la actuación policial en la Capital
            Federal. Pero al cierre de esta edición, la protesta se desató en
            diferentes provincias y amenaza con derramarse por todo el país.
            Durante las próximas semanas, además, el Mapa de la Policía será
            lanzado en la ciudad de La Plata y en Rosario. Así las cosas, cada
            vez se torna más relevante cartografiar los movimientos policiales y
            construir una potente red de autocuidados ciudadanos.{" "}
          </h4>
        </div>
      </div>

      {/* Análisis Político */}
      <section className={styles.headerBox}>
        <img src={politicoImg} alt="" className={styles.img} />
        <div className={styles.titleBox}>
          <h2 className={styles.titleNumber}>3</h2>
          <h2 className={styles.sistematicoTitle}>Autoboicot penitenciario</h2>
          <h3 className={styles.sistematicoSubTitle}>
            Propuestas contrapopuestas de (in)seguridad
          </h3>
        </div>
      </section>
      <div className={styles.politicoContainer}>
        <h4 className={styles.singularTextBlack}>
          En el Tercer Reporte del Mapa de la Policía expusimos “la pesadilla de
          los detenidos en Alcaidías y Comisarías porteñas”. Desde entonces, y
          con especial énfasis durante el mes de abril, hubo{" "}
          <a
            className={styles.link}
            href="https://www.ambito.com/informacion-general/la-fuga-presos-la-ciudad-preocupa-los-vecinos-y-expone-la-superpoblacion-las-comisarias-n5978348"
          >
            una catarata de fugas
          </a>{" "}
          que fueron visibilizadas -con su habitual espectacularización- por las
          redes sociales y los medios de comunicación. De esta manera, los
          vecinos de la Ciudad tomaron consciencia de un problema que expone al
          sentido común punitivista en toda su crudeza. A modo de respuesta, el
          Gobierno de la Ciudad de Buenos Aires (GCBA) decretó el 6 de mayo la
          emergencia edilicia, de infraestructura y condiciones de alojamiento
          en comisarías e instituciones de encierro.
        </h4>
        <h4 className={styles.singularTextBlack}>
          A partir de ello, propuso crear
          <a
            className={styles.link}
            href="https://buenosaires.gob.ar/noticias/una-nueva-alcaidia-modulos-de-detencion-y-tobilleras-las-medidas-de-la-ciudad-por-la"
          >
            {" "}
            19 nuevos módulos de detención,
          </a>
          ubicados en los playones o estacionamientos de comisarías, con
          capacidad para alojar a 300 personas, y se capacitará a personal
          policial en prácticas penitenciarias. Además, se construirá{" "}
          <a
            className={styles.link}
            href="https://buenosaires.gob.ar/noticias/una-nueva-alcaidia-modulos-de-detencion-y-tobilleras-las-medidas-de-la-ciudad-por-la"
          >
            una nueva alcaidía central
          </a>{" "}
          con espacio para 1200 detenidos, cuya locación será el sur porteño,
          entre Lugano y Soldati. Todo apunta a la conformación de un sistema
          penitenciario propio de la Ciudad. A la par, apuran la construcción de
          Marcos Paz para poder vender Devoto y hacerse de ese negocio.
        </h4>
        <h4 className={styles.singularTextBlack}>
          No está mal que se amplíen o construyan nuevos espacios para que
          quienes hoy están privados de su libertad mejoren las condiciones de
          detención. Pero la responsabilidad del Estado en establecimientos de
          encierro no termina en disponer un lugar donde pasar la noche. Quienes
          hoy cumplen su condena en una alcaidía o comisaría de la Ciudad deben
          tener una alimentación digna, acceder a trabajo, educación, atención
          médica, entre otros estándares establecidos por la Constitución, la
          jurisprudencia de la Corte Suprema y los tribunales internacionales.
        </h4>
      </div>
      <div className={styles.politicoPart2}>
        <Icons icon="run" className={styles.icons2}></Icons>

        <h4 className={styles.singularText}>
          La segunda iniciativa del oficialismo porteño consiste en poner a
          disposición de la justicia federal y nacional{" "}
          <a
            className={styles.link2}
            href="https://elnumeral.com/2024/05/03/mas-carceles-tobilleras-y-deportacion-de-extranjeros-las-propuestas-de-jorge-macri/"
          >
            2000 tobilleras electrónicas
          </a>{" "}
          nuevas. Se trata, dicen las autoridades, de una modalidad que permite
          descomprimir el sistema carcelario. Sin embargo, vale la pena advertir
          que este procedimiento ha servido la mayoría de las veces para ampliar
          aún más el alcance del sistema penal, incluyendo en él a personas que,
          de no existir dichos grilletes posmodernos, no habrían siquiera visto
          su libertad comprometida.
        </h4>
        <h4 className={styles.singularText}>
          {" "}
          El Jefe de Gobierno Jorge Macri propuso también la deportación de
          migrantes extranjeros “ilegales”, lo cual ya fue implementado por su
          primo Mauricio Macri durante su mandato en la Presidencia de la
          Nación, a través del DNU 70/2017, luego derogado en marzo de 2021.
          Según distintos informes publicados por el CELS, dicha normativa viola
          principios esenciales como el derecho a migrar, a la regularización
          migratoria, a la no discriminación y el derecho al debido proceso en
          todos los trámites y procedimientos migratorios. Durante su vigencia,
          “la aplicación del DNU separó a madres de sus hijes, y a miles de
          personas se les sometió a una inminente expulsión, atada a la suerte
          de los escasos recursos legales que ofrecía la norma”.
        </h4>
      </div>
      <div className={styles.politicoPart3}>
        <Icons icon="not" className={styles.icons2}></Icons>

        <h4 className={styles.singularText}>
          No está claro que estas medidas contribuyan a evitar la sobrepoblación
          de personas privadas de su libertad en comisarías o alcaidías, muchas
          veces incluso cumpliendo condena. Porque como dice un viejo refrán:
          “cárcel que se abre, cárcel que se llena”. Para que realmente las
          nuevas plazas ayuden a aliviar la sobrepoblación, es necesario una
          política criminal del Estado que acompañe a disminuir la totalidad de
          personas privadas de su libertad. Pero el GCBA parece proponer todo lo
          contrario, aferrado al manual punitivo de la ultraderecha: introduce
          la figura de la{" "}
          <a
            className={styles.link}
            href="https://elnumeral.com/2024/05/03/mas-carceles-tobilleras-y-deportacion-de-extranjeros-las-propuestas-de-jorge-macri/"
          >
            reiterancia
          </a>
          <a
            className={styles.link}
            href="https://www.cels.org.ar/web/2024/05/reformas-penales-agravan-problemas/"
          >
            -como se propone a nível nacional-,
          </a>{" "}
          lo cuál amplía al discrecionalidad de la prisión preventiva{" "}
          <a
            className={styles.link}
            href="https://www.ppn.gov.ar/index.php/institucional/noticias/3596-vigesimo-cuarto-reporte-mensual-sobre-alojamiento-en-alcaidias-y-comisarias-de-la-ciudad-de-buenos-aires"
          >
            -medida por la cual, casi el 60% de las personas se encuentran
            privadas de su libertad-;
          </a>{" "}
          instala que las{" "}
          <a
            className={styles.link}
            href="https://www.lanacion.com.ar/politica/diego-kravetz-dijo-que-la-mitad-de-las-personas-en-situacion-de-calle-tienen-antecedentes-penales-nid14042024/"
          >
            personas en situación de calle poseen antecedentes penales,
          </a>{" "}
          preparando las condiciones para su encierro; y le inician causas
          penales a los integrantes de movimientos sociales, criminalizando la
          protesta.{" "}
        </h4>
        <h4 className={styles.singularText}>
          Así las cosas, todo parece indicar que el aumento en las capacidades
          penitenciarias no mejorará las condiciones de detención, sino que
          abonará el incremento de la cantidad de personas con prisión
          preventiva, de acuerdo a una política criminal cada vez más agresiva
          con la ciudadanía.
        </h4>
      </div>

      {/* Contador de Casos */}
    </div>
  );
};

export default Reportes;
