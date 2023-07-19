import { useIndianRupeeFormatter } from "../../customHooks/IndianRupee.hook";
import CustomText from "../atoms/customText.atom";

type OrderCheckoutProp = {
    imgUrl:string,
    courseTitle:string,
    actualPrice:number,
    discountedPrice:number
}
const OrderCheckout = ({imgUrl,courseTitle,actualPrice,discountedPrice}:OrderCheckoutProp)=>{
    let ruppeformatter = useIndianRupeeFormatter;
    return (
        <div className="row shadow-sm" style={{padding:"5px"}}>
        <div className="col-1">
          <img src={imgUrl} alt={courseTitle} style={{ width: "100%" }}/>
        </div>
        <div className="col">
          <strong>{courseTitle}</strong>
        </div>
        <div className="col-3 d-flex">
          <div className='d-flex flex-column align-items-end'>
          <strong><CustomText text={ruppeformatter(discountedPrice)} color='purple'/></strong>
          <CustomText text={ruppeformatter(actualPrice)} color='grey' styles={{textDecoration:'line-through'}}/>
          </div>
        </div>
      </div>
    );
}

export default OrderCheckout;