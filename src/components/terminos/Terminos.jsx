import styles from "./Terminos.module.css";

const Terminos = () => {
  return (
    <div className={styles.terminosContainer}>
      <h5 className={styles.header}>
        Autorizo de manera voluntaria, previa, explícita, informada e inequívoca
        al Mapa de la Policía para tratar mis datos personales de acuerdo con su
        Política de Tratamiento de Datos Personales. Ver Política de Tratamiento
        de Datos Personales.
      </h5>

      <h3 className={styles.header}>Objetivo</h3>
      <h5 className={styles.text}>
        El presente documento tiene por objetivo establecer los principios,
        términos y condiciones para el tratamiento de datos personales,
        actividad que incluye la recolección, almacenamiento, procesamiento,
        actualización, uso, circulación, transmisión, transferencia y supresión
        de la información que se suministra al Mapa de la Policía en el
        desarrollo de su objetivo. Adicionalmente, la Política de Tratamiento de
        Datos Personales establece los derechos de los Titulares de la
        información y los procedimientos para hacerlos efectivos.
      </h5>

      <h3 className={styles.header}>Alcance</h3>
      <h5 className={styles.text}>
        Esta Política de Tratamiento de Datos Personales se aplicará a todas las
        Bases de Datos y/o Archivos que contengan Datos Personales que sean
        objeto de Tratamiento por parte del Mapa de la Policía.
      </h5>

      <h3 className={styles.header}>Marco Legal</h3>
      <h5 className={styles.text}>
        El presente documento se desarrolla conforme al marco jurídico argentino
        para el tratamiento de los datos personales, específicamente el artículo
        43, párrafo tercero de la Constitución Nacional y la Ley 25.326 de Datos
        Personales del año 2000.
      </h5>

      <h3 className={styles.header}>Tratamiento de Datos Personales</h3>
      <h5 className={styles.text}>
        El tratamiento de la información incluye la recolección, almacenamiento,
        procesamiento, actualización, uso, circulación, transferencia y
        supresión de los datos personales que se suministren al Mapa de la
        Policía de conformidad con lo previsto en Ley 25.326 del año 2000 y las
        demás normas que las modifiquen, sustituyan, desarrollen y/o
        complementen.
      </h5>
      <h5 className={styles.text}>
        Para el tratamiento de dicho material, El Mapa de la Policía podrá: (i)
        administrar la información recolectada en una o varias bases de datos
        según la forma y organización que estime conveniente, (ii) verificar,
        corroborar, comprobar, validar, investigar o comparar la información
        suministrada por los Titulares de Información, con cualquier información
        de que disponga legítimamente, (iii) consultar y evaluar cualquier
        información que sobre los Titulares de Información se encuentre
        almacenada en las bases de datos de cualquier central de riesgo
        crediticio, financiero, de antecedentes judiciales o de seguridad
        legítimamente constituida, de naturaleza estatal o privada, nacional o
        extranjera.
      </h5>

      <h5 className={styles.text}>
        El Mapa de la Policía tiene un compromiso con el adecuado manejo de la
        información que le suministren sus usuarios. Para el efecto, deberá
        velar por la conservación de la confidencialidad de aquella información
        que tiene carácter reservado.
      </h5>

      <h5 className={styles.text}>
        El Mapa de la Policía suministra, cuando se requiere, la información a
        sus asesores y consultores para el cumplimiento de las labores que se
        encomienden a ellos. La transferencia de información se realiza con base
        en acuerdos de confidencialidad a través de los cuales se protege la
        reserva de la información y el debido cumplimiento de la Presente
        Política de Tratamiento de Datos Personales.
      </h5>

      <h3 className={styles.header}>Datos Sensibles</h3>
      <h5 className={styles.text}>
        Conforme a lo previsto en el artículo 2 de la Ley 25.326 de 2000, son
        datos sensibles aquellos “que revelan origen racial y étnico, opiniones
        políticas, convicciones religiosas, filosóficas o morales, afiliación
        sindical e información referente a la salud o a la vida sexual.”
      </h5>
      <h5 className={styles.text}>
        Los datos sensibles, de acuerdo al artículo 7 de la ley 25.326 del 2000,
        no son obligatorios de proporcionar para ninguna persona y solo pueden
        ser tratados cuando medien las razones autorizadas por ley con finalidad
        estadística o científica sin que sean identificados sus titulares.
      </h5>

      <h3 className={styles.header}>Derecho de los Titulares</h3>
      <h5 className={styles.text}>
        Las personas naturales cuyos Datos Personales sean objeto de Tratamiento
        por parte del Mapa de la Policía, tienen los siguientes derechos, los
        cuales pueden ejercer en cualquier momento, conforme a la Ley 25.326 de
        2000:
      </h5>
      <ul>
        <li>
          Conocer los Datos Personales sobre los cuales El Mapa de la Policía
          está realizando el Tratamiento. De igual manera, el Titular puede
          solicitar en cualquier momento, que sus datos sean actualizados o
          rectificados, por ejemplo, si encuentra que sus datos son parciales,
          inexactos, incompletos, fraccionados, induzcan a error, o aquellos
          cuyo Tratamiento esté expresamente prohibido o no haya sido
          autorizado.
        </li>
        <li>
          La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de
          Control de la Ley Nº 25.326, tiene la atribución de atender las
          denuncias y reclamos que se interpongan con relación al incumplimiento
          de las normas sobre protección de datos personales.
        </li>
      </ul>

      <h5>
        El Mapa de la Policía se reserva el derecho de modificar esta Política
        de Tratamiento de Datos Personales en cualquier momento. Cualquier
        cambio será informado y publicado oportunamente en la página
        mapadelapolicia.com.
      </h5>
    </div>
  );
};

export default Terminos;
