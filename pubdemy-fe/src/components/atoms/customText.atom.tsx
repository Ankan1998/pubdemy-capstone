type CustomTextProp = {
    text:string;
    color?:string;
    styles?:any;

}

const CustomText = ({text,color,styles}:CustomTextProp)=>{
    let styleColor:string = color ? color : 'black';
    return(
        <span style={{...styles,color:styleColor}}>{text}</span>
    );
}

export default CustomText;