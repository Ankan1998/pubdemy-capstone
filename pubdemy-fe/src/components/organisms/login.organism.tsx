import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import CustomText from "../atoms/customText.atom";
import IconTextBox from "../atoms/iconTextBox.atom";
import LoginForm from "../molecules/loginForm.molecule";

const Login = ()=>{
    return (
        <div className="container py-3">
            <div className="row justify-content-center">
                <div className="col-3 d-flex flex-column gap-2">
                    <strong><CustomText text={"Log in to your Pubdemy account"}/></strong>
                    <hr></hr>
                    <IconTextBox icon={faGlobe} text={"Facebook"} isBorder={true}/>
                    <IconTextBox icon={faGlobe} text={"Facebook"} isBorder={true}/>
                    <IconTextBox icon={faGlobe} text={"Facebook"} isBorder={true}/>
                    <LoginForm/>
                    <div className="d-flex inline-flex gap-2">
                        <CustomText text={"Don't have an account? "} color="grey"/>
                        <strong><CustomText text={"Sign Up"} color="purple"/></strong>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Login;