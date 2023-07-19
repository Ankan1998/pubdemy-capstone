import { useNavigate } from "react-router-dom";
import CustomText from "../atoms/customText.atom";
import CartCourseCard from "../organisms/cartCourseCard.organism";
import { AppState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { CourseModel } from "../../models/course.model";
import CartTotal from "../molecules/cartTotal.molecule";

const ShoppingCart = ()=>{
    let cart = useSelector((store:AppState)=> store.cart);
    let navigate = useNavigate()

    return (
            <div className="container" style={{paddingTop:"5%", paddingBottom:"3%"}}>
                <div className="row">
                <h1><strong><CustomText text={"Shopping Cart"}/></strong></h1>
                </div>
                <div className="row gap">
                    <div className="col-9 d-flex flex-column">
                    <CustomText text={`${cart.cartSize} Courses in Cart`} color="grey"/>
                    {cart.courses.map((course:CourseModel)=>(<CartCourseCard courseId={course.id} imgUrl={course.imageUrl} title={course.courseTitle} author={course.author} rating={course.rating} isBestSeller={course.isBestseller} numStudentRated={course.studentRated} numLecture={course.numOfLectures} lectureLength={course.courseLength} actualPrice={course.price} discountedPrice={course.discountedPrice} subTitle={course.courseSubtitle}/>))}   
                    </div> 
                    <div className="col-3">
                        <CartTotal actualTotalPrice={cart.totalActualPrice} discountedTotalPrice={cart.totalDiscountedPrice} onClickCheckout={()=>navigate('/checkout')}/>
                        </div>             
                </div>
            </div>
    );
}

export default ShoppingCart;