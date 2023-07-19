type Props = {
    text: string;
    backgroundColor: string;
    textColor: string;
    border?:string;
    inheritParentWidth: boolean;
    containerHeightInPx?:string;
    onClick?:any;
    isDisabled?:boolean
  };
  
  const FlatButton = ({ text, backgroundColor, textColor, inheritParentWidth,containerHeightInPx,border,onClick,isDisabled }: Props) => {
    let cursorProperty:string = onClick ? 'pointer':'default'
    const buttonStyle = {
      backgroundColor,
      color: textColor,
      border: border?border:"none",
      fontWeight: "bold",
      cursor: cursorProperty
    };
    const parentWidth = inheritParentWidth ? "w-100" : ""
    const isDisabledX:boolean = isDisabled?isDisabled:false
  
    return (
      <button className={`btn rounded-0 ${parentWidth}`} style={buttonStyle} onClick={onClick} disabled={isDisabledX}>
        {text}
      </button>
    );
  };
  
  export default FlatButton;