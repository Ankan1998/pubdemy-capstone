import CustomText from "../atoms/customText.atom";
import FlatButton from "../atoms/flatButton.atom";

type CartTotalProps = {
    actualTotalPrice:number;
    discountedTotalPrice:number;
    onClickCheckout: () => void;
}

const CartTotal = ({actualTotalPrice,discountedTotalPrice,onClickCheckout}:CartTotalProps)=>{
    const calculateDiscountPercentage = (totalPrice: number, discountedPrice: number): number => {
        return ((totalPrice - discountedPrice) / totalPrice) * 100;
      };
    return(
        <div className="d-flex flex-column">
            <strong><CustomText text={"Total:"} color="grey"/></strong>
            <h2><strong><CustomText text={`Rs. ${discountedTotalPrice.toString()}`}/></strong></h2>
            <CustomText text={`Rs. ${actualTotalPrice.toString()}`} styles={{textDecoration:'line-through'}} color={'grey'}/>
            <CustomText text={`${calculateDiscountPercentage(actualTotalPrice,discountedTotalPrice).toFixed(2).toString()} %off`} color="grey" styles={{marginBottom:"10px"}}/>
            <FlatButton text={"Checkout"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={false} onClick={onClickCheckout}/>

        </div>
    );

}

export default CartTotal;

