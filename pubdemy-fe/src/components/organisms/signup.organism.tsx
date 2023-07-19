import CustomText from "../atoms/customText.atom";
import SignupForm from "../molecules/signupForm.molecule";

const SignUp = ()=>{
    return (
        <div className="container" style ={{paddingTop:"7%",paddingBottom:"3%"}}>
        <div className="row justify-content-center">
            <div className="col-3 d-flex flex-column gap-2">
                <strong><CustomText text={"Sign Up and start learning"}/></strong>
                <SignupForm/> 
                <div className="d-flex inline-flex gap-2">
                        <CustomText text={"Already have an account?"} color="grey"/>
                        <strong><CustomText text={"Login"} color="purple"/></strong>
                    </div>                   
            </div>
        </div>
    </div>
    );
}

export default SignUp;

