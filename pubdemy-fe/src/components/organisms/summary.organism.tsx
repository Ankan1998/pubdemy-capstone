import { useNavigate } from "react-router-dom";
import { useIndianRupeeFormatter } from "../../customHooks/IndianRupee.hook";
import CustomText from "../atoms/customText.atom";
import FlatButton from "../atoms/flatButton.atom";
import SummaryComponent from "../atoms/summaryComponent.atom";
import { useCheckoutValidationContext } from "../../context/checkoutValidation.context";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { emptyCart } from "../../redux/reducers/cart.reducer";

type SummaryProps = {
    actualTotalPrice:number,
    discountedTotalPrice:number
}
const Summary =({actualTotalPrice,discountedTotalPrice}:SummaryProps)=>{
    const {isValid} = useCheckoutValidationContext();
    const rupeeFormatter = useIndianRupeeFormatter;
    let dispatch = useDispatch()
    let navigate = useNavigate()
    return (
        <div className="container">
            <div className="row align-items-center" style={{backgroundColor:"#Eef2f3", paddingLeft:"2%", paddingTop:"15%", paddingBottom:"20%"}}>
                <div className="col-5 d-flex flex-column ">
                    <h3><CustomText text={"Summary"} styles={{fontWeight:"700", marginLeft:"10px"}}/></h3>
                    <SummaryComponent leftText={"Original Price"} rightText={rupeeFormatter(actualTotalPrice)} isStrong={false}/>
                    <SummaryComponent leftText={"Discounted Price"} rightText={rupeeFormatter(discountedTotalPrice)} isStrong={false}/>
                    <hr></hr>
                    <SummaryComponent leftText={"Total:"} rightText={rupeeFormatter(actualTotalPrice+discountedTotalPrice)} isStrong={true}/>
                    <CustomText text={"By completing this purches you agree to T&C"} color="grey" styles={{marginLeft:"10px", paddingBottom:"10px"}}/>
                    <FlatButton text={"Complete Checkout"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={false} onClick={()=>{
                        dispatch(emptyCart())
                        navigate('/congratulation')
                        }} isDisabled={!isValid}/>

                </div>

            </div>
            <div className="row" style={{height:"100px"}}>
                
                </div>

        </div>

    );
}

export default Summary;