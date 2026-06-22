import { VscTools } from "react-icons/vsc";
import { BiBookReader, BiWorld, BiVideoRecording } from "react-icons/bi";
import {
  TbAlertTriangle,
  TbZoomExclamation,
  TbShoppingBagX,
  TbHandStop,
  TbMessageReport,
} from "react-icons/tb";
import { HiOutlineMusicalNote, HiOutlinePhoto } from "react-icons/hi2";
import { BsMegaphone } from "react-icons/bs";
import { GiGunshot, GiNotebook, GiCctvCamera, GiRun } from "react-icons/gi";
import { SiMaildotru } from "react-icons/si";
import { GrDocumentExcel } from "react-icons/gr";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { SlPencil } from "react-icons/sl";
import {
  RiAlarmWarningLine,
  RiForbid2Line,
  RiSdCardLine,
} from "react-icons/ri";
import { PiReadCvLogoBold } from "react-icons/pi";

const iconComponents = {

  // Gatillo Facil
  gatillo_mapa: <GiGunshot />,
  gatillo: <GiGunshot />, // En opciones

  // Reportes
  reportes_mapa: <TbAlertTriangle />, // En el mapa
  reportes: <TbAlertTriangle />, 
  


  // usados
  AHORA: <RiSdCardLine />,
  
  autorx: <SlPencil />,
  ilus: <HiOutlinePhoto />,
  denuncias: <BsMegaphone />,
  investigaciones: <BiBookReader />,
  mapa: <TbZoomExclamation />,
  recursos: <VscTools />,
  contacto: <SiMaildotru />,
 

  /*Reportes*/
  reportesAlert: <TbMessageReport />,
  securityCam: <GiCctvCamera />,
  siren: <RiAlarmWarningLine />,
  document: <PiReadCvLogoBold />,
  run: <GiRun />,
  not: <RiForbid2Line />,

  /*recursos*/
  institucionales: <GrDocumentExcel />,
  detencion: <FaPersonMilitaryToPerson />,
  guia: <GiNotebook />,
  migrantes: <BiWorld />,
  ambulantes: <TbShoppingBagX />,
  filmar: <BiVideoRecording />,
  genero: <TbHandStop />,

  podcast: <HiOutlineMusicalNote />,
};

type Props = {
  icon: keyof typeof iconComponents;
  className?: string;
  iconSize: string;
};
const Icons: React.FC<Props> = ({ icon, className, iconSize }) => {
  const iconComponent = iconComponents[icon];

  return (
    <div className={className} style={{ fontSize: iconSize }}>
      {iconComponent}
    </div>
  );
};

export default Icons;
