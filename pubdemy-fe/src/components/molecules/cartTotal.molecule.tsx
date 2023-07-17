import CustomText from "../atoms/customText.atom";
import FlatButton from "../atoms/flatButton.atom";

type CartTotalProps = {
    actualTotalPrice:number;
    discountedTotalPrice:number;
    percentageOff:number;
    onClickCheckout: () => void;
}

const CartTotal = ({actualTotalPrice,discountedTotalPrice,percentageOff,onClickCheckout}:CartTotalProps)=>{
    return(
        <div className="d-flex flex-column">
            <CustomText text={"Total:"} color="grey"/>
            <h2><strong><CustomText text={`Rs. ${discountedTotalPrice.toString()}`}/></strong></h2>
            <CustomText text={`Rs. ${actualTotalPrice.toString()}`} styles={{textDecoration:'line-through'}} color={'grey'}/>
            <CustomText text={`${percentageOff.toString()}%off`} color="grey" styles={{marginBottom:"10px"}}/>
            <FlatButton text={"Checkout"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={true} onClick={onClickCheckout}/>

        </div>
    );

}

export default CartTotal;

