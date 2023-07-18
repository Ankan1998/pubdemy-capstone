import CustomText from "../atoms/customText.atom";
import CartCourseCard from "../organisms/cartCourseCard.organism";
import NotLoggedInHeader from "../organisms/notLoggedInHeader.organism";

const ShoppingCart = ()=>{
    return (
        <div>
            <NotLoggedInHeader/>
            <div className="container">
                <div className="row">
                <h3><strong><CustomText text={"Shopping Cart"}/></strong></h3>
                </div>
                <div className="row">
                    <CustomText text={"Courses in Cart"} color="grey"/>
                    <CartCourseCard imgUrl={"https://wallpapers.com/images/featured/sukuna-xjixgtkkwa2ovcwy.jpg"} title={""} author={""} rating={0} isBestSeller={false} numStudentRated={0} numLecture={0} lectureLength={0} actualPrice={0} discountedPrice={0}/>
                    
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;