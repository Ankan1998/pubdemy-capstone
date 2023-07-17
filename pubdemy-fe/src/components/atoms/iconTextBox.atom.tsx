import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
  text: string;
  isBorder?:boolean
};

const IconTextBox = ({ icon,text,isBorder }: Props) => {
  let borderProperties:string = isBorder?"border border-dark p-2 shadow-sm" :""
  return (
    <div className={`d-flex align-items-center ${borderProperties}`}>
      <FontAwesomeIcon icon={icon} className="me-2" />
      <span>{text}</span>
    </div>
  );
};

export default IconTextBox;