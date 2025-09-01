import CaseCounter from "./CaseCounter";
import styles from "./CuartoReporte.module.css";
import Icons from "../iconos/Icons";

const QuintoReporte = () => {
  const numeroReporte = 5; // Definimos numeroReporte como una constante con el valor 4
  const fecha = "16 de diciembre 2024";
  const bajada = [
    "El Mapa de la Policía es una herramienta digital que propone construir una RED DE CUIDADOS CONTRA LA VIOLENCIA POLICIAL, integrada por diversos colectivos y personas comunes.",
    "El principal objetivo de la iniciativa es VISIBILIZAR EL ABUSO de las fuerzas de seguridad para evitar que se naturalice.",
  ];
  const tituloSistematico = "El regreso de las razzias";
  const tituloPolitico = "El oxímoron de las armas menos letales";
  const subtituloPolitico = "Apuntes sobre la gobernanza de ultraderecha";
  const singularImg =
    "https://static.wixstatic.com/media/0f4ca0_568735806ee749b588aae9358978fc13~mv2.jpg/v1/fill/w_1190,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gatillo-mayo-2024-x-panchopepe-PORTADA--WEB-CRISIS.jpg";
  const sistematicoImg =
    "https://static.wixstatic.com/media/0f4ca0_76fe5ebb9f0e46669055f80ef7fcad0f~mv2.jpg/v1/crop/x_0,y_711,w_1080,h_801/fill/w_750,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sistem%207.jpg";
  const politicoImg =
    "https://static.wixstatic.com/media/0f4ca0_4213c0937f57499fb662ab97f5634506~mv2.jpg/v1/crop/x_0,y_671,w_1080,h_841/fill/w_750,h_584,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AML%201.jpg";
  const otrasImg =
    "https://static.wixstatic.com/media/0f4ca0_d533cc2bdcf14a33ba5bc917c84c60fb~mv2.jpg/v1/crop/x_0,y_713,w_1080,h_799/fill/w_750,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sistem%203.jpg";
  const otrasImg2 =
    "https://static.wixstatic.com/media/0f4ca0_3d63a9a527574466b5091f06e9339d3c~mv2.jpg/v1/crop/x_0,y_675,w_1077,h_837/fill/w_535,h_415,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0f4ca0_3d63a9a527574466b5091f06e9339d3c~mv2.jpg";
  const otrasImg3 =
    "https://static.wixstatic.com/media/0f4ca0_6c90d4a0a5b8497f9db66cdbd0e1e43f~mv2.jpg/v1/crop/x_0,y_0,w_1080,h_409/fill/w_750,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sistem%208.jpg";
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
              <h5>Reaccionar ante la arbitrariedad policial es una opción </h5>
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
            Reaccionar ante la arbitrariedad policial es una opción
          </h3>
          <h4 className={styles.singularText}>
            El viernes 11 de octubre a las 13 horas, Julio Vidal, de 28 años,
            vendía paltas en Acoyte y Rivadavia, barrio Caballito. El feriado
            estaba particularmente tranquilo, hasta que una moto con dos agentes
            de la Policía de la Ciudad se aproximó hacia él con actitud
            amenazante. Como vendedor ambulante Julio conoce el hostigamiento
            policial, que incluye golpes y decomiso de mercadería, por lo que se
            apuró a guardar las paltas en el carro para retirarse. No tuvo
            éxito. Pese a sus pedidos y los intentos de negociación para que no
            le sacaran el carro donde transporta la mercancía, los efectivos se
            ensañaron con él. Ante semejante crueldad, decenas de vecinos
            comenzaron a increpar a los agentes que ya no eran dos sino quince,
            e incluía varias motos y un patrullero.
          </h4>
          <h4 className={styles.singularText}>
            Durante varios minutos la resistencia y solidaridad de los vecinos y
            vecinas logró demorar el traslado de Julio hacia la Comisaría 6B de
            la calle Avellaneda 1548, en el mismo barrio donde se produjeron los
            hechos. Como parte de la reacción de las personas que actuaron con
            indignación ante lo sucedido, alguien pateó una moto policial que
            cayó en plena calle. La policía detuvo al voleo a un joven de 18
            años que estaba apoyando a Julio. Acusados por el delito de
            resistencia a la autoridad, ambos quedaron en libertad en las
            primeras horas del día siguiente. El carro con el que trabaja Julio
            y las paltas fueron decomisadas.
          </h4>
        </div>
        <div className={styles.singularPart2}>
          <Icons icon="reportesAlert" className={styles.icons}></Icons>
          <h4 className={styles.singularTextBlack}>
            Lo llamativo de lo sucedido aquel 11 de octubre en Caballito no fue
            la arbitrariedad policial, ni su ensañamiento con los trabajadores
            ambulantes. Sino el hecho de un grupo de personas que en ese momento
            pasaba por la esquina más concurrida del tradicional barrio porteño,
            decidieron interrumpir su descanso de feriado y reaccionaron ante la
            crueldad policial. Por un gesto de elemental justicia ciudadana, que
            merece ser replicado.
          </h4>
        </div>
      </div>

      {/* Caso de Violencia Sistématica */}
      <section className={styles.headerBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.titleNumber}>2</h2>
          <h2 className={styles.sistematicoTitle}>
            Análisis de una práctica sistemática
          </h2>
          <h3 className={styles.sistematicoSubTitle}>
            El regreso de las razzias
          </h3>
        </div>
        <img src={sistematicoImg} alt="" className={styles.img} />
      </section>
      <div className={styles.sistematicoContainer}>
        <div>
          <h4 className={styles.singularTextBlack}>
            Durante el primer año de gobierno de Jorge Macri hubo un elemento
            distintivo en materia de seguridad: varios grandes despliegues
            represivos en barrios populares de la Ciudad de Buenos Aires. Los
            vecinos denuncian que, lejos de llevar alguna solución a las
            problemáticas de inseguridad, estos operativos violentos apuntan a
            montar un espectáculo estigmatizante.
          </h4>

          <h4 className={styles.singularTextBlack}>
            La seguidilla de eventos fue catalogada con el término razzia,
            palabra muy común a finales del siglo pasado, que según el
            investigador Esteban Rodríguez Alzueta en su libro Temor y control
            (2014) es un ostentoso desembarco de las fuerzas de seguridad en los
            territorios, en busca de personas con pedidos de captura o elementos
            como armas o drogas. Sin embargo, en los casos recientes más bien
            estamos ante “operativos de saturación” con un amplio espectro de
            causalidades.
          </h4>
          <h4 className={styles.singularTextBlack}>
            Uno de los denominadores comunes de estas intervenciones, amén de la
            brutalidad, es su uso por parte del Ministerio de Seguridad como
            material de propaganda política. Luego de los operativos, sus
            máximos funcionarios postean en las redes sociales mensajes y videos
            con la versión oficial de los hechos, que en general dista bastante
            de los registros y denuncias de los vecinos del lugar.
          </h4>
        </div>

        <div className={styles.sistemPart2}>
          <img src={otrasImg} alt="" className={styles.otrasImg} />

          <div>
            <h4 className={styles.singularText}>
              Si en la narrativa macrista priman los escenarios bélicos, en la
              realidad la mayoría de los detenidos y heridos terminaron siendo
              gente al voleo, entre ellos chicos menores de edad, personas con
              discapacidad y hasta embarazadas. La presencia del secretario de
              Seguridad, Diego Kravetz y del ministro del área, Waldo Wolff,
              encabezando las razzias en una actitud de campaña política
              permanente, es otro rasgo distintivo.
            </h4>
          </div>
          <div className={styles.sistemPart2}>
            <img src={otrasImg2} alt="" className={styles.otrasImg} />
          </div>

          <div>
            <h4 className={styles.singularText}>
              El 14 de junio en el Barrio Ricciardelli (1.11.14) hubo un
              violento operativo de la Policía de la Ciudad y Gendarmería.
              Comenzó con un allanamiento en un local de venta de celulares
              ubicado en el sector comercial de la villa, que despertó una
              reacción de la gente en contra del decomiso. La respuesta de las
              fuerzas de seguridad fue una represión indiscriminada contra
              feriantes y vecinos del barrio, con balas de goma y golpes. En ese
              contexto, un chico fue gaseado y en un video compartido por la
              revista Cítrica se lo ve muy dolorido y asustado. El hecho tuvo
              lugar dos días después de la represión contra la protesta contra
              la aprobación de la Ley Bases en la plaza del Congreso, pero tuvo
              una repercusión mediática casi nula.
            </h4>
          </div>
        </div>
        <div className={styles.sistemPart2}>
          <img src={otrasImg} alt="" className={styles.otrasImg} />

          <div>
            <h4 className={styles.singularText}>
              La razzia del 25 de julio en el Barrio 15, conocido como Ciudad
              Oculta, fue paradigmática por sus proporciones. Kravetz y Wolff
              ingresaron al barrio escudados por fuerzas de la División
              Operaciones Especiales Metropolitanas (DOEM), efectivos de
              Infantería y agentes de la Motorizada. Algunos vecinos hablaron de
              un helicóptero sobrevolando a muy baja altura que aterrorizó a los
              habitantes. En su camino, los efectivos increparon, golpearon y
              detuvieron a mansalva: diez detenidos según el ministerio de
              Seguridad, 200 según el referente barrial y periodista, “Pitu”
              Salvatierra, cuyo hijo fue apresado cuando estaba en la
              peluquería. También detuvieron a cuatro chicos con carnet de
              discapacidad y hubo disparos indiscriminados con postas de goma.
              “Se juntó la gente y les impidió seguir moviéndose con la moto en
              los pasillos, porque aceleraban en el pasillo sin ningún sentido
              para generar terror en la población”, explicó Salvatierra. La
              precuela de este acontecimiento fue un operativo de saturación el
              día anterior, en el que los vecinos arrojaron una olla de hierro
              que hirió en la cabeza a un efectivo, lo que desencadenó la
              represalia. Kravetz en su posteo provocó: “El respeto a la policía
              de la Ciudad no se negocia”.
            </h4>
          </div>
        </div>

        <div className={styles.sistemPart2}>
          <img src={otrasImg3} alt="" className={styles.otrasImg} />

          <div>
            <h4 className={styles.singularText}>
              El 3 de octubre, en el marco de un violento y desproporcionado
              operativo de saturación en el barrio Zavaleta (21-24), la Policía
              de la Ciudad allanó un merendero del Movimiento Evita. La
              intervención ocurrió luego de un tiroteo entre la fuerza porteña y
              dos sujetos en el barrio. “La presencia del secretario de
              seguridad, Diego Kravetz en el lugar, confirma lo que ya sabemos:
              no se trató de un exceso policial, sino que estos operativos de
              saturación son una decisión política que sólo busca amedrentar y
              hostigar a quienes vivimos en los barrios populares. Como son
              siempre: fuertes contra los débiles y débiles contra los
              poderosos”, postearon en sus redes los integrantes de la
              organización social. También difundieron un video en el que se
              observa la presencia del cuerpo de infantería y agentes
              pertrechados de escopetas y escudos. El Evita denuncia que
              numerosos compañeros y vecinos fueron golpeados y heridos con
              balas de goma y gases lacrimógenos, incluyendo a chicos menores de
              edad. Diez personas fueron detenidas, entre ellas, una mujer
              embarazada de siete meses que estaba sirviendo la merienda. El
              Secretario de Seguridad, por su parte, difundió otro video con su
              versión de los hechos. Kravetz habla de “seis delincuentes”
              imputados, “dos de ellos con antecedentes por robo y uno por
              drogas”, y una detención “por resistencia, atentado a la autoridad
              y lesiones”. También afirma que durante el procedimiento “dos de
              nuestros efectivos resultaron heridos tras ser atacados. Ninguno
              de gravedad”.
            </h4>
          </div>
        </div>
        <div className={styles.sistemPart2}>
          <h4 className={styles.singularText}>
            Si bien estos mega operativos no son una absoluta novedad, lo cierto
            es que su repetición y la reivindicación abierta por parte de las
            autoridades del Gobierno de la Ciudad le dan un cariz particular. Si
            el objetivo publicitario consiste en mostrar saturación y control
            sobre el territorio, en la realidad de los barrios populares sigue
            primando el abandono y las zonas liberadas para el despliegue del
            narco, en un contexto de retirada del estado de sus funciones de
            inclusión social justo cuando se agudiza la grave crisis social y
            económica.
          </h4>
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
              políticas del oficialismo, para disuadirlos y que no se
              movilicen;{" "}
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
          <h2 className={styles.sistematicoTitle}>
            El oxímoron de las armas menos letales
          </h2>
          <h3 className={styles.sistematicoSubTitle}>
            Apuntes sobre la gobernanza de ultraderecha
          </h3>
        </div>
      </section>
      <div className={styles.politicoContainer}>
        <h4 className={styles.singularTextBlack}>
          Durante el año 2024, el gobierno nacional de Javier Milei y la
          administración porteña de Jorge Macri, ambos de orientación
          derechista, habilitaron el aumento de la represión estatal,
          legitimando para tal fin el uso de las llamadas armas “no letales”. Su
          empleo fue particularmente intenso en la violencia policial contra las
          protestas sociales.
        </h4>
        <h4 className={styles.singularTextBlack}>
          La más famosa de este tipo de armamento es la pistola taser, que según
          <a
            className={styles.link}
            href="https://buenosaires.gob.ar/noticias/seguridad-en-el-subte-la-policia-de-la-ciudad-usara-pistolas-taser"
          >
            la web oficial
          </a>{" "}
          del Gobierno de la Ciudad de Buenos Aires “permite neutralizar a un
          delincuente sin riesgo de vida para otros, y es una de las mejores
          herramientas de seguridad para lugares concurridos como el subte”. Con
          este argumento pretenden convencer a la ciudadanía sobre la
          conveniencia de utilizar este pertrecho en reemplazo de las armas de
          fuego, que vendrían a ser letales. En{" "}
          <a
            className={styles.link}
            href="https://mapadelapolicia.com/#/investigacion/tiro-descarga"
          >
            un artículo
          </a>{" "}
          publicado en junio de 2023 en la sección de investigaciones del Mapa
          de la Policía, la periodista Gilda Izurieta reseñaba las complejidades
          que el uso de estas pistolas de descarga eléctrica traen aparejadas.
        </h4>
      </div>
      <div className={styles.politicoPart2}>
        <Icons icon="run" className={styles.icons2}></Icons>

        <h4 className={styles.singularText}>
          También se consideran como armas no letales a diferentes dispositivos
          antidisturbios utilizados para reprimir a la protesta social, según
          indica este manual publicado en 2015 por Amnistía Internacional:
        </h4>
        <h4 className={styles.singularText}>
          1. Camiones hidrantes que lanzan chorros de agua con alta presión con
          el objetivo de hacer retroceder a les manifestantes, o colorearlos con
          fines de identificación.
        </h4>
        <h4 className={styles.singularText}>
          2. Proyectiles de energía cinética, más conocidas como balas de goma,
          que produce el daño por impacto directo contra la persona.
        </h4>
        <h4 className={styles.singularText}>
          3. Agentes químicos irritantes (gas pimienta, gas lacrimógeno o
          químicos con olores nauseabundos), operan sobre la vista y el tracto
          respiratorio, produciendo incapacitación por irritación sensorial,
          quemaduras químicas, vómitos, asfixia y formación de ampollas en la
          piel.
        </h4>
        <h4 className={styles.singularText}>
          Como explica el Centro de Estudios Legales y Sociales (CELS) en un
          informe realizado en conjunto con la organización colombiana
          Temblores, “el abuso de armas menos letales se ha consolidado como una
          evidencia de la debilidad de muchas democracias modernas”, y cuando se
          utilizan de manera indebida o ilegítima pueden ocasionar lesiones
          graves e incluso la muerte.
        </h4>
      </div>
      <div className={styles.politicoPart3}>
        <Icons icon="not" className={styles.icons2}></Icons>

        <h4 className={styles.singularText}>
          Varios episodios particularmente violentos fueron ocasionados por las
          denominadas “armas menos letales” en situaciones de protestas durante
          el año que termina. El primero tuvo lugar el 1 de febrero en la
          movilización contra la Ley Bases en la plaza del Congreso, cuando el
          abogado de derechos humanos Matías Aufieri fue herido en un ojo por
          una bala de goma. El mismo incidente se repitió el 10 de abril y esta
          vez la víctima fue el manifestante Claudio Astorga, durante una
          protesta de organizaciones sociales frente al ministerio de Capital
          Humano. El uso de gases pimienta muy tóxicos fue una de las tónicas de
          estos meses y el caso más elocuente se vivió el 11 de septiembre,
          cuando un efectivo de la policía Federal vació su spray en la cara de
          una niña de 10 años.
        </h4>
        <h4 className={styles.singularText}>
          El auge de las denominadas “armas no letales” son parte de la batalla
          cultural que domina al debate público contemporáneo. De un lado,
          porque se inserta en los que Ana Natalucci, describe como una
          operación criminalizadora por parte de los gobiernos, valiéndose de
          mecanismos legales, discursivos y gubernamentales para obstaculizar,
          controlar y/o impedir acciones de protesta social, con el objetivo de
          considerarla como un delito antes que como un derecho. Desde una
          percepción antagónica, diversas organizaciones de derechos humanos
          proponen modificar la idea de “no letales” por la noción de “menos
          letales”, poniendo el foco en la modalidad de uso y no tanto en su
          característica intrínseca. Empleadas con saña y crueldad, este tipo de
          armamento puede ser mortal.
        </h4>
        <h4 className={styles.singularText}>
          Por último, la crítica al supuesto consenso que rodea a la
          introducción de “armas menos letales” posee otro argumento de peso:
          lejos de reducir el espacio para la utilización de armas de fuego, el
          avance de nuevos pertrechos amplía el campo posible de aplicación de
          armamento, incluyendo situaciones (como la neutralización de personas
          con problemas de salud mental) que debieran ser tramitadas sin apelar
          a métodos represivos.
        </h4>
      </div>

      {/* Contador de Casos */}
    </div>
  );
};

export default QuintoReporte;
