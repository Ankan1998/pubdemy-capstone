import { useSelector } from "react-redux";
import InitialNameCircle from "../atoms/initialNameCircle.atom";
import { AppState } from "../../redux/store/store";
import CustomText from "../atoms/customText.atom";
type FloatingProfileProp ={
    name:string,
    email:string
}

const FloatingProfileBox = ({name,email}:FloatingProfileProp)=>{
    return(
        <div className="container-fluid shadow-sm pl-3 pr-3 pt-2 pb-2 m-0">
            <div className="row">
            <div className="col">
                <InitialNameCircle name={name}/>

            </div>
            <div className="col d-flex flex-column">
                <CustomText text={name}/>
                <CustomText text={email}/>

            </div>
            </div>
        </div>
    );
}

export default FloatingProfileBox;