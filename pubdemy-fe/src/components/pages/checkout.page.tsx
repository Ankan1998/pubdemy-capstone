import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import OrderCheckout from "../molecules/orderCheckout.molecule";
import Summary from "../organisms/summary.organism";
import { CourseModel } from "../../models/course.model";
import { CartModel } from "../../models/cart.model";
import CountryStateDropdown from "../molecules/countryStateDropDown.molecule";
import CreditCardForm from "../organisms/creditCrard.organism";
import CustomText from "../atoms/customText.atom";

const CheckoutPage =()=>{

    let cart:CartModel = useSelector((store:AppState)=> store.cart);
    return(
        <div className="container-fluid" style={{paddingLeft:"0",paddingRight:"0"}}>
            <div className="row"><div className="col-2"></div>
                <div className="col-4 d-flex flex-column py-3">
                    <h3 style={{margin:"2%"}}><strong><CustomText text={"Checkout"}/></strong></h3>
                <CountryStateDropdown />
                    <CreditCardForm />
                    {cart.courses.map((course:CourseModel)=>(<OrderCheckout imgUrl={course.imageUrl} courseTitle={course.courseTitle} actualPrice={course.price} discountedPrice={course.discountedPrice}/>))}
                    

                </div>
                <div className="col-6 summary">
                    <Summary actualTotalPrice={30000} discountedTotalPrice={660}/>
                    </div>
            </div>
            
        </div>
    );
}

export default CheckoutPage;