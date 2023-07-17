type Props = {
    text: string;
    backgroundColor: string;
    textColor: string;
    border?:string;
    inheritParentWidth: boolean;
    onClick?: () => void;
  };
  
  const FlatButton = ({ text, backgroundColor, textColor, inheritParentWidth,border,onClick }: Props) => {
    let cursorProperty:string = onClick ? 'pointer':'default'
    const buttonStyle = {
      backgroundColor,
      color: textColor,
      border: border?border:"none",
      fontWeight: "bold",
      cursor: cursorProperty
    };
    const parentWidth = inheritParentWidth ? "w-100" : ""
    const onHandleClick = ()=>{
        if(onClick){
            onClick();
        }
    }
  
    return (
      <button className={`btn rounded-0 ${parentWidth}`} style={buttonStyle} onClick={onHandleClick}>
        {text}
      </button>
    );
  };
  
  export default FlatButton;