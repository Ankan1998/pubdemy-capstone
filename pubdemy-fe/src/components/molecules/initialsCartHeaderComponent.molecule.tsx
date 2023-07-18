import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomText from "../atoms/customText.atom";
import { faBasketShopping, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import InitialNameCircle from "./initialNameCircle.molecule";
import ShoppingCartIcon from "./shoppingCartIcon.molecule";

const InitialsCartHeaderComponent = ()=>{
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
            {/* Cart with number on top */}
            <ShoppingCartIcon count={5}/>
        </div>
        
        <div className="col">
        <InitialNameCircle name={"Ankan Sharma"}/>
        
        </div>
      </div>
    </div>
    );
}

export default InitialsCartHeaderComponent;