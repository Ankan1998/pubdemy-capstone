import { faCartShopping, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../atoms/flatButton.atom";
import { useNavigate } from "react-router-dom";

const LoginSignUpHeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{maxWidth:'350px'}}>
      <div className="row">
        <div className="col-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faCartShopping}/>
        </div>
        <div className="col-4">
        <FlatButton text={'Log In'} backgroundColor={'white'} textColor={'black'} border="2px solid black" inheritParentWidth={true} onClick={(()=>{
          navigate('/');
        })} />

        </div>
        <div className="col-4">
        <FlatButton text={'Sign Up'} backgroundColor={'black'} textColor={'white'} border="2px solid black" inheritParentWidth={true} onClick={(()=>{
          navigate('/signup');
        }) } />
        </div>
        <div className="col-1 d-flex align-items-center">
        <FontAwesomeIcon icon={faGlobe}/>
        
        </div>
      </div>
    </div>
  );
}

export default LoginSignUpHeaderComponent;