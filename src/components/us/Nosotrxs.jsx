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
        </section>
      </section>

      <Logos logos={listaDeLogos} />

      <div className={styles.thinLine} />
      <div className={styles.develop}>
        {" "}
        <h4>DESAROLLADA X EDIPO</h4>
      </div>
    </section>
  );
};

export default Nosotrxs;
