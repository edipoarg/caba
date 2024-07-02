import { VscTools } from "react-icons/vsc";
import { BiBookReader, BiWorld, BiVideoRecording } from "react-icons/bi";
import {
  TbAlertTriangle,
  TbZoomExclamation,
  TbShoppingBagX,
  TbHandStop,
  TbMessageReport,
} from "react-icons/tb";
import {
  HiOutlineMusicalNote,
  HiOutlinePhoto,
  HiUserGroup,
} from "react-icons/hi2";
import { BsMegaphone, BsDiagram3 } from "react-icons/bs";
import { GiGunshot, GiNotebook, GiCctvCamera, GiRun } from "react-icons/gi";
import { IoAppsOutline } from "react-icons/io5";
import { SiMaildotru } from "react-icons/si";
import { GrDocumentExcel } from "react-icons/gr";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { SlPencil } from "react-icons/sl";
import { FaMapMarker } from "react-icons/fa";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";
import { GoPersonFill } from "react-icons/go";
import PropTypes from "prop-types";
import { RiAlarmWarningLine, RiForbid2Line, RiSdCardLine } from "react-icons/ri";
import { PiReadCvLogoBold } from "react-icons/pi";

const iconComponents = {
  mapa: <TbZoomExclamation />,
  denuncias: <BsMegaphone />,
  recursos: <VscTools />,
  investigaciones: <BiBookReader />,
  reportes: <TbAlertTriangle />,
  podcast: <HiOutlineMusicalNote />,
  jefatura: <BsDiagram3 />,
  contacto: <SiMaildotru />,
  gatillo: <GiGunshot />,
  menu: <IoAppsOutline />,
  AHORA: <RiSdCardLine />,

  /*denuncias*/
  indiv: <GoPersonFill />,
  colective: <HiUserGroup />,

  /*recursos*/
  institucionales: <GrDocumentExcel />,
  genero: <TbHandStop />,
  detencion: <FaPersonMilitaryToPerson />,
  guia: <GiNotebook />,
  ambulantes: <TbShoppingBagX />,
  migrantes: <BiWorld />,
  filmar: <BiVideoRecording />,

  /* investigaciones */
  autorx: <SlPencil />,
  ilus: <HiOutlinePhoto />,

  /*Markers*/
  dependencia: <FaMapMarker />,
  casosGatillo: <VscDebugBreakpointUnsupported />,
  casosViolencia: <TbAlertTriangle />,

  /*Reportes*/
  reportesAlert: <TbMessageReport />,
  securityCam: <GiCctvCamera />,
  siren: <RiAlarmWarningLine />,
  document: <PiReadCvLogoBold />,
  run: <GiRun />,
  not: <RiForbid2Line />,
};

const Icons = ({ icon, className, iconSize }) => {
  const iconComponent = iconComponents[icon] || null;

  return (
    <div className={className} style={{ fontSize: iconSize }}>
      {iconComponent}
    </div>
  );
};

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
};

export default Icons;
