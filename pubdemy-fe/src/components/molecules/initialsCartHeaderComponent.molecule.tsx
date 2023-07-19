import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomText from "../atoms/customText.atom";
import { faBell, faHeart, } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartIcon from "./shoppingCartIcon.molecule";
import { AppState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InitialNameCircle from "../atoms/initialNameCircle.atom";
import FloatingProfileBox from "./floatingProfileBox.molecule";
import TextButton from "../atoms/textButton.atom";
import { logOut } from "../../redux/reducers/user.reducer";
import { emptyCourse } from "../../redux/reducers/course.reducer";
import { emptyCart } from "../../redux/reducers/cart.reducer";

const InitialsCartHeaderComponent = ()=>{
    const cart = useSelector((store:AppState)=>store.cart)
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    let dispatch = useDispatch()
    let navigate = useNavigate()
    const user = useSelector((store:AppState)=>store.user)

    function toggleBox() {
        setIsBoxVisible(!isBoxVisible);
  
      }
  
      function LogOut() {
          dispatch(logOut())
          dispatch(emptyCourse())
          dispatch(emptyCart())
          navigate('/')
    
        }
    return (
        <div className="container">
      <div className="row">
      <div className="col-4 d-flex align-items-center">
            <CustomText text={"My Learning"} color="grey"/>
        </div>
        <div className="col-1 d-flex align-items-center">
            <FontAwesomeIcon icon={faHeart}/>
        </div>
        
        <div className="col-1 d-flex align-items-center">
        <Link to={`/cart`} style={{ textDecoration: 'none', color:"black" }}><ShoppingCartIcon count={cart.cartSize}/></Link>
        </div>
        
        <div className="col-1 d-flex align-items-center">
            <FontAwesomeIcon icon={faBell}/>
        </div>
        
        <div className="col-5">
        <InitialNameCircle name={user.username} onClick={toggleBox}>{isBoxVisible && (
        <div className="shadow-lg"
          style={{
            position: 'absolute',
            top: '6%',
            left: '82%',
            width: '200px',
            backgroundColor:'white',
            paddingBottom:"10px" 
          }}
        >
          <div className="d-flex flex-column align-items-start gap-2">
            <FloatingProfileBox name={user.username} email={user.email}/>
            <CustomText text={"My Learning"} styles={{paddingLeft:"5px"}}/>
            <TextButton onClick={()=>navigate('/cart')} text={"My cart"} isDisabled={false}/>
            <CustomText text={"My Learning"} styles={{paddingLeft:"5px"}}/>
            <TextButton onClick={LogOut} text={"Log Out"} isDisabled={false}/>

          </div>
        </div>
      )}</InitialNameCircle>
        
        </div>
      </div>
    </div>
    );
}

export default InitialsCartHeaderComponent;