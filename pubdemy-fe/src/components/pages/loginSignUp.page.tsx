import Login from "../organisms/login.organism";
import NotLoggedInHeader from "../organisms/notLoggedInHeader.organism";
import SignUp from "../organisms/signup.organism";

const LoginSignUpPage = ()=>{
    return (
        <div>
            <NotLoggedInHeader/>
            <SignUp/>

        </div>
    );
}

export default LoginSignUpPage;