import { faBell, faGlobe } from "@fortawesome/free-solid-svg-icons";
import CustomText from "../atoms/customText.atom";
import IconTextBox from "../atoms/iconTextBox.atom";

const FooterBottom = ()=>{
    return (<div className="row py-3">
        <div className="col-2 d-flex flex-column">
            <CustomText text={"Udemy Business"} color="white"/>
            <CustomText text={"Teach on Udemy"} color="white"/>
            <CustomText text={"Get App"} color="white"/>
            <CustomText text={"Udemy Business"} color="white"/>
            <CustomText text={"Udemy Business"} color="white"/>
        
        </div>
        <div className="col-2 d-flex flex-column">
        <CustomText text={"Udemy Business"} color="white"/><CustomText text={"Udemy Business"} color="white"/>
        <CustomText text={"Udemy Business"} color="white"/><CustomText text={"Udemy Business"} color="white"/>
        
        </div>
        <div className="col-2 d-flex flex-column">
        <CustomText text={"Udemy Business"} color="white"/>
        <CustomText text={"Udemy Business"} color="white"/>
        <CustomText text={"Udemy Business"} color="white"/>
        
        </div>
        <div className="col align-items-start justify-content-end d-flex">
            <IconTextBox icon={faGlobe} text={"English"}/>
        
        </div>

    </div>

    );
}

export default FooterBottom;
