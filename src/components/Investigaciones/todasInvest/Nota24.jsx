import styles from "./TodasInvestigaciones.module.css";

const Nota23 = () => {
  return (
    <div className={styles.NotaContainer}>
      <h4 className={styles.singularText}>
        Palantir es una empresa de software cofundada por Peter Thiel en 2003
        que el año pasado superó la mitad de sus ingresos con clientes
        gubernamentales de todo el mundo. En septiembre de 2025 se conocieron
        documentos internos del Servicio de Control de Inmigración y Aduanas de
        Estados Unidos (ICE, por sus siglas en inglés), en los que se verifica
        que la migra utiliza los servicios de Palantir en sus investigaciones y
        durante las operaciones en el terreno. Manuales de capacitación,
        informes de uso y cientos de intercambios por correo electrónico para
        optimizar la persecución y el arresto de migrantes mediante una red
        creciente de bases de datos privados y públicos. Registros en
        plataformas, uso de aplicaciones, datos personales en vuelos aéreos,
        escaneos de licencia de conducir, selfies, ubicaciones geolocalizadas:
        cualquier movimiento que produzca un dato es almacenado para correr en
        softwares de inteligencia artificial y organizar en instantes el perfil
        de un ciudadano. En abril de este año, el tecnomagnate se reunió con el
        presidente Javier Milei en Casa Rosada y a los pocos días compró una
        propiedad en Barrio Parque.
      </h4>
      <h4 className={styles.singularText}>
        La presencia de Thiel en Argentina inquieta por varios motivos, pero
        sobre todo por la posibilidad de que la ciudad de Buenos Aires se
        convierta en el ensayo de territorio hipervigilado que sueñan los dueños
        del mundo. En ese sentido, la Ciudad de Buenos Aires ya implementó una
        maquinaria semejante aunque con menor grado de sofisticación y desde el
        Mapa de la Policía{" "}
        <a
          href="https://mapadelapolicia.com/#/investigacion/tu-cara-me-suena"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          advertíamos los problemas que eso podía conllevar.
        </a>{" "}
      </h4>
      <h4 className={styles.singularText}>
        En 2022, el juez Roberto Gallardo a cargo del Juzgado de Primera
        Instancia en lo Contencioso Administrativo y Tributario N°2 suspendió el
        Sistema de Reconocimiento Facial de Prófugos (SRFP) que se había
        instalado en CABA. La decisión respondía a una acción de amparo
        presentada por el Observatorio de Derecho Informático Argentino (ODIA).
        La prohibición de usar el software sigue vigente.
      </h4>

      <h3 className={styles.subTitle}>cómo funciona el coso</h3>

      <h4 className={styles.singularText}>
        A diario, el Registro Nacional de Reincidencia actualiza la Consulta
        Nacional de Rebeldías y Capturas (CoNaRC). El exministro de Justicia y
        Derechos Humanos de la Nación, Germán Garavano, tomó la decisión en 2016
        de que este registro fuera público y pueda ser consultado por internet
        con el objetivo de contribuir a la lucha contra el delito. El motor del
        SRFP se conecta automáticamente con la CoNaRC y completa el perfil con
        fotografías del ReNaPer (Registro Naciona de las Personas). El
        entrenamiento del algoritmo permite procesar la geografía facial de las
        personas que se individualizan desde las cámaras y las compara con las
        fotos de la base de datos. Si hay coincidencia suficiente, se genera un
        alerta vía Telegram que llega al celular del oficial de la Policía de la
        Ciudad más cercano para efectivizar la detención y completar la
        identificación del individuo.
      </h4>

      <img
        src="https://static.wixstatic.com/media/0f4ca0_9928de3c0c324bf89207baff7b9280ab~mv2.jpg/v1/fill/w_918,h_577,al_c,q_85,enc_avif,quality_auto/foto%20nota.jpg"
        alt="Centro de monitoreo urbano"
        className={styles.image3}
      />
      <h4 className={styles.singularText}>Fuente: ODIA. Imagen propia.</h4>

      <h4 className={styles.singularText}>
        &quotEl objetivo es que estos delincuentes no convivan con nosotros
        todos los días. La primera garantía es la de la privacidad: el sistema
        sólo trabaja con los prófugos aportados por la CONARC, una base pública
        que puede leer cualquier ciudadano del país&quot, explicó Diego
        Santilli, ministro de Seguridad y Derechos Humanos al momento de la
        presentación del sistema, el miércoles 24 de abril de 2019.
      </h4>
      <h4 className={styles.singularText}>
        Días después, entre el 6 y el 17 de mayo de 2019, visitó la Argentina el
        Relator Especial de la ONU sobre el derecho a la privacidad, Joseph
        Cannataci, quien presentó una declaración preliminar ante la prensa
        terminada su evaluación. Fueron{" "}
        <a
          href="https://argentina.un.org/es/168010-declaraci%C3%B3n-del-relator-especial-sobre-el-derecho-la-privacidad-tras-visitar-argentina"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          41 puntos
        </a>{" "}
        entre los que se destacan tres.
      </h4>
      <h4 className={styles.singularText}>
        Sobre la lista diaria de la CoNaRC: &quotLa base de datos contiene
        múltiples errores: por ejemplo, dos personas figuran como de 2 y 3 años
        de edad, buscadas por asalto y robo&quot, de una totalidad de 61 menores
        de edad, de quienes también se publican todos sus datos personales.
        Cannataci recuerda en su informe que es derecho de todo niñx que se
        respete plenamente su vida privada durante todo el procedimiento,
        conforme indica la Convención por los derechos del niño a la que
        Argentina adhirió en diciembre de 1990.
      </h4>
      <h4 className={styles.singularText}>
        Sobre la implementación: &quotNo veo la proporcionalidad de instalar una
        tecnología con graves implicaciones para la privacidad para buscar en
        una lista de 46 mil personas [N. del R: a mayo de 2019] que actualmente
        incluye a menores y delitos no graves y que no se actualice y compruebe
        cuidadosamente su exactitud&quot.
      </h4>
      <h4 className={styles.singularText}>
        Sobre la seguridad en la protección de datos: &quotQue el reconocimiento
        facial se esté implementando sin el PIA (Privacy Impact Assessment)
        necesario, así como la consulta deseable y las fuertes salvaguardias,
        también es motivo de preocupación. El Gobierno ha aprobado una
        reglamentación de bajo nivel en materia de biometría, pero no una
        legislación detallada sobre el uso del reconocimiento facial&quot,
        concluye en el punto 21.
      </h4>

      <h3 className={styles.subTitle}>los múltiples errores</h3>

      <h4 className={styles.singularText}>
        La cantidad de errores e irregularidades que mostró el Sistema de
        Reconocimiento Facial de Prófugos en funcionamiento fue clave para
        dejarlo fuera de uso. El caso más evidente es el que sufrió Guillermo
        Federico Ibarrola el sábado 27 de julio de 2019 cuando el sistema hizo
        match y disparó un alerta a la Policía de la Ciudad para que lo
        detuviera de inmediato. Guillermo regresaba de Tigre con su familia y
        fue detenido en la estación de trenes de Retiro como prófugo por un
        violento robo cometido en Bahía Blanca hacía tres años. Quedó arrestado
        en CABA 5 días hasta que fue trasladado al edificio del Juzgado de
        Garantías nº2 de Bahía Blanca, donde tenía pedido de captura, para luego
        verificar su identidad e ingresar a la Unidad Penal N°4. El fiscal cruzó
        foto, DNI y domicilio, pidió que lo suelten de inmediato y lo suban al
        primer micro de regreso a su casa. A las 3 horas, Guillermo Ibarrola
        viajaba rumbo a Ezeiza. Finalmente, se supo que el malentendido se
        originó en una mala carga de datos en la base de Registro Nacional de
        Reincidencia dependiente del Ministerio de Justicia y Derechos Humanos
        de la Nación. Confundieron su número de DNI con el de un Guillermo
        Federico Ibarrola, con domicilio en Bahía Blanca, que golpeó con un
        martillo a su víctima para robarle y está prófugo desde entonces.
      </h4>
      <h4 className={styles.singularText}>
        Otro yerro del estilo ocurrió en octubre del año pasado. El actor Osqui
        Guzmán fue detenido de forma arbitraria un miércoles por la tarde en la
        estación Dorrego del subte B, en CABA. Según contó, una agente de la
        policía le pidió el DNI sin motivo aparente, se lo arrebató y le dijo:
        “El algoritmo te reconoció, vos sos chorro”. A continuación, la agente
        lo golpeó dos veces mientras él intentaba explicar que no había hecho
        nada. Frente a esta contradicción –que la agente alegue el
        reconocimiento de un software en desuso por orden judicial–, las
        posibilidades son solo dos: o la oficial de policía miente al decir que
        Guzmán fue reconocido por el algoritmo, o el Ministerio miente al
        declarar que el SRFP no se está utilizando. Y una pregunta más, ¿Qué tan
        frecuentemente ocurren detenciones, verdugueos o violencia policial que
        desconocemos por el perfil no público de los ciudadanos que la sufren?
      </h4>

      <h3 className={styles.subTitle}>episodio CFK</h3>

      <h4 className={styles.singularText}>
        El 15 de noviembre de 2018, la ex presidenta Cristina Fernández de
        Kirchner publicó: &quotAyer por la mañana dos personas sin
        identificación alguna intentaron colocar 3 cámaras y un domo en la
        esquina de mi casa, aquí en Buenos Aires. Personas de la Policía Federal
        que integra la custodia advirtió esta situación y les consultó qué tipo
        de tareas estaban realizando&quot. La por entonces senadora llegó en la
        madrugada a su casa de Recoleta luego de una tensa sesión en la que
        discutió el Presupuesto 2019, y horas después, denunciaba en redes
        sociales lo que calificó como persecución. Continúa el tweet, &quotles
        dijeron que eran empleados de la empresa Donaide S.A. (sic) e iban a
        colocar estas cámaras por disposición del Ministerio de Seguridad de la
        Ciudad de Buenos Aires. Sin embargo, no contaban con ninguna
        documentación que acreditara tales circunstancias. Luego de
        identificarse recibieron un llamado, se subieron a su camioneta (sin
        inscripción alguna de la empresa a la que decían pertenecer) y se
        fueron. Raro, no?&quot. El episodio dejó algunas incógnitas abiertas y
        el nombre propio de una empresa.
      </h4>

      <h3 className={styles.subTitle}>todas las empresas, la empresa</h3>

      <h4 className={styles.singularText}>
        El territorio porteño cuenta con al menos 15 mil cámaras de seguridad
        que monitorean el 75% de la ciudad, según datos del propio gobierno. El{" "}
        <a
          href="https://buenosaires.gob.ar/gcaba_historico/laciudad/noticias/compromiso-cumplido-la-ciudad-tiene-el-75-del-territorio-con-videovigilancia#:~:text=En%20toda%20la%20Ciudad%20hay,el%2075%25%20del%20territorio%20porte%C3%B1o"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sistema de Videovigilancia
        </a>{" "}
        comprende todas las cámaras de dominio público: seguridad, tránsito,
        AUSA (Autopistas Urbanas Sociedad Anónima) y SBASE (Subterráneos de
        Buenos Aires), y todas se supervisan desde los cuatro Centros de
        Monitoreo Urbano. El algoritmo del reconocimiento de rostros se preparó
        en su primera etapa para correr en 300 cámaras, que podían alternarse
        conforme los puntos de la ciudad en los que la Policía porteña requería
        cobertura.
      </h4>
      <h4 className={styles.singularText}>
        {" "}
        <a
          href="https://danaide.com.ar/es/empresa/#clientes"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Danaide S.A.{" "}
        </a>{" "}
        –no Donaide, como escribió la expresidenta– es la responsable técnica
        del sistema y se especializa en la prestación de servicios relacionados
        con vigilancia y sistemas de control. Suministra UltraIP, un software de
        reconocimiento facial desarrollado por la propia Danaide S.A., según
        indica{" "}
        <a
          href="https://adc.org.ar/wp-content/uploads/2019/07/Respuesta-PAIP-reconocimiento-facial-GCBA-V2.pdf"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          la respuesta{" "}
        </a>{" "}
        al pedido de información pública que realizó Asociación Civil ADC.
        Constituida como sociedad anónima, con sede declarada en CABA y en La
        Plata, tiene solo dos accionistas: Hernán Carzalo y Juan Agustín
        Carzalo. Es proveedora clave del gobierno porteño desde 2016 en
        servicios de videovigilancia tecnológica y acumula más de $700 millones
        en contratos con la Policía de la Ciudad para monitoreo por video de
        control de accesos, sistemas de ciberseguridad y reconocimiento facial.
      </h4>
      <h4 className={styles.singularText}>
        Danaide S.A. tiene como presidente a Hernán Carzalo, socio de Mario
        Montoto (MM) en Tecnoview S.A., otra empresa que ofrecía servicios de
        &quotprovisión de tecnología aplicada a la seguridad&quot. Montoto es
        quien inició el negocio de venta e instalación de cámaras en la Ciudad
        de Buenos Aires y es de esos nombres propios que, como Patricia
        Bullrich, cumplen 50 años de vigencia en la política nacional. Como la
        actual senadora, además de un vínculo cercano, los unen años de
        militancia en Montoneros, y es allí donde Mario hizo sus primeros
        palotes con las cámaras. Tras el golpe, Pascualito, su nombre de guerra
        en Montoneros, se encargó de monitorear el circuito cerrado de
        televisión y seguridad que protegía la casa de la familia Firmenich en
        un barrio residencial de México DF.
      </h4>
      <h4 className={styles.singularText}>
        Así como Patricia dibuja una parábola histórica desde la organización de
        base hasta ministra de Seguridad de la Nación,{" "}
        <a
          href="https://revistacrisis.com.ar/notas/mario-montoto-el-dueno-del-control"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mario{" "}
        </a>{" "}
        pasó de los campamentos en el Líbano de la Organización para la
        Liberación de Palestina a presidente de la Cámara de Comercio
        Argentina-Israelí, desde donde hoy provee máquinas para controlar a la
        población. Como documenta Germán Romano en el libro Mario Montoto, el
        empresario a las sombras del poder político (2019), se trata de la
        persona que inició el negocio de venta e instalación de cámaras de
        videovigilancia en CABA. Comenzó cuando en el año 2006 el gobierno
        porteño firmó un convenio con la Universidad Tecnológica Nacional (UTN)
        para instalar cámaras en plazas y parques, tarea que, en efecto, ejecutó
        la subcontratada{" "}
        <a
          href="https://codesursa.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          CODESUR S.A.{" "}
        </a>{" "}
        (Corporación para la Defensa del Sur), de MM. Esta tercerización se
        volvió prescindible entre 2009 y 2010 cuando Mauricio Macri la contrató
        de manera directa en siete oportunidades. Luego, junto a Daniel Hadad,
        MM creó Global View S.A., empresa que desde su primera licitación en
        abril 2010 gana la compulsa de precios sin interrupciones hasta 2015.
        Sólo en ese lustro, la nueva empresa de videovigilancia obtuvo contratos
        con la gestión del PRO por $390 millones.. En 2009 también se formalizó
        la sociedad MECUM S.A., con{" "}
        <a
          href="https://www.pagina12.com.ar/diario/elpais/subnotas/219415-63479-2013-05-06.html"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Alejandra Beatriz Rafuls{" "}
        </a>{" "}
        como presidenta y MM como vicepresidente, según consta en el Boletín
        Oficial. Rafuls fue también la fundadora de la consultora AR y
        Asociados, una agencia contratada de manera directa o con licitaciones a
        medida desde el año 2010 y al menos hasta 2013 por el exministro de
        Justicia y Seguridad de la Ciudad, Guillermo Montenegro. Rafuls es amiga
        íntima y madrina de uno de los hijos de Montenegro. El rol de la agencia
        en materia de comunicación oficial incluía la tarea de prensa de la
        Policía Metropolitana. Esto le permitía acceder y organizar la
        distribución de las imágenes captadas por la cámaras de vigilancia a los
        medios de comunicación mediante el sistema ProntoBaires.ar y Asociados
        también fue contratada por los principales medios del grupo Infobae,
        fundado en 2002 por Daniel Hadad.
      </h4>
      <h4 className={styles.singularText}>
        Montoto,{" "}
        <a
          href="https://www.lapoliticaonline.com/politica/malestar-entre-los-duenos-de-medios-porque-santiago-caputo-puso-a-alejandra-rafuls-a-manejar-la-pauta/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Rafuls{" "}
        </a>{" "}
        y Hadad fueron expandiendo sus servicios por la Provincia de Buenos
        Aires, en Tigre, Lanús y Escobar. En algunos casos se denunciaron
        irregularidades en la ejecución de contratos, como instalación parcial
        de cámaras pese al pago total del servicio o licitaciones con escasa
        competencia. Por otra parte, los municipios que mostraron reticencias,
        cuestionaron los precios por la prestación del servicio o contrataron
        otra empresa, denunciaron que estaban siendo objeto de de{" "}
        <a
          href="https://www.lanoticiaweb.com.ar/ivoskus-arremetio-contra-el-grupo-hadad/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          campañas de desprestigio.{" "}
        </a>{" "}
        Años más tarde MM también se posicionó como proveedor central de
        sistemas de vigilancia vehicular, capaces de registrar y almacenar
        patentes en circulación. La empresa Danaide S.A. obtuvo en 2021 una
        licitación en CABA por más de mil millones de pesos para el control
        vehicular, junto con otro contrato por análisis y gestión de imágenes
        por $300 millones adicionales. Además, el mismo núcleo empresario provee
        tecnología y servicios al Sistema Penitenciario Federal. A través de{" "}
        <a
          href="https://surely-sa.com.ar/servicios-2/monitoreo-de-detenidos/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Surely S.A.{" "}
        </a>
        , también fundada por Montoto, se consolidó como uno de los principales
        proveedores de dispositivos de control como tobilleras electrónicas,
        pulseras con GPS y botones antipánico.
      </h4>

      <h3 className={styles.subTitle}>palantir.manaos.monorriel</h3>

      <h4 className={styles.singularText}>
        Tomás Pomar es abogado especialista en derecho digital, docente de la
        UBA y presidente del Observatorio del Derecho Informático Argentino
        (ODIA). En una reciente{" "}
        <a
          href="https://youtu.be/Nj5jTkdBVPk?si=CMlou_mKJUXk1Rmp"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          nota en FM La Tribu
        </a>
        , el abogado sintetizó que &quotpara quienes laburamos en estas
        cuestiones, es vivir todo el tiempo en el{" "}
        <a
          href="https://www.youtube.com/watch?v=XsEndSWkfHM"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          capítulo del Monorriel
        </a>{" "}
        de los Simpsons: un tipo aparece con una solución mágica, donde hay un
        funcionario político de turno que por connivencia o desconocimiento
        contrata algo que no tiene idea cómo implementar y para qué, con costos
        altísimos en términos políticos&quot.
      </h4>
      <h4 className={styles.singularText}>
        La imagen del tecnomagnate radicado en la Ciudad de Buenos Aires que
        juega al ajedrez en un local del Abasto y deja trascender vía
        empresarios que dedica sus horas a elaborar teorías sobre un Anticristo
        luddita es fascinante. Tomás Pomar reorienta el foco: &quotLa mejor base
        de datos para hacer cualquier política pública la tiene Mercado Pago.
        Está monitoreando transacciones cotidianas geolocalizadas con
        referencias sobre cuánto es el ingreso de cada persona, con un conjunto
        de datos agregados que ellos van poniendo. Tienen un nivel de
        capilaridad de información muy interesante&quot. Lo que queda claro es
        que en un contexto de tránsito de datos como el que estamos viviendo, la
        videovigilancia no puede ser una decisión unilateral por parte de los
        gobiernos, pero sobre todo no puede ser un bien al servicio de las
        corporaciones.
      </h4>

      <h4 className={styles.singularText}>
        Si consideramos la línea histórica que detallamos, los actores
        nacionales e internacionales interesados tanto en la promoción como en
        la dotación de infraestructura tecnológica para el control ciudadano y
        sobre todo, la creciente producción de datos personales que día a día
        entregamos a entidades públicas y privadas, parece urgente levantar la
        guardia ciudadana y profundizar los debates alrededor de la protección
        de nuestra información personal.
      </h4>
    </div>
  );
};

export default Nota23;
