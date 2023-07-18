import CustomText from "../atoms/customText.atom";
import CourseViewCard from "../organisms/courseViewCard.organism";
import NotLoggedInHeader from "../organisms/notLoggedInHeader.organism";

const CourseLandingPage = ()=>{
    return (
        <div>
            <NotLoggedInHeader/>
            <div className="container">
                <div className="row">
                    <strong><CustomText text={"Students are viewing"}/></strong>
                <CourseViewCard imgUrl={""} courseTitle={""} author={""} rating={0} studentRated={0} coursePrice={0} discountedPrice={0} isBestSellerTag={false}/>
                <CourseViewCard imgUrl={""} courseTitle={""} author={""} rating={0} studentRated={0} coursePrice={0} discountedPrice={0} isBestSellerTag={false}/>
                <CourseViewCard imgUrl={""} courseTitle={""} author={""} rating={0} studentRated={0} coursePrice={0} discountedPrice={0} isBestSellerTag={false}/>
                <CourseViewCard imgUrl={""} courseTitle={""} author={""} rating={0} studentRated={0} coursePrice={0} discountedPrice={0} isBestSellerTag={false}/>
                    <CourseViewCard imgUrl={""} courseTitle={""} author={""} rating={0} studentRated={0} coursePrice={0} discountedPrice={0} isBestSellerTag={false}/>
                </div>
            </div>

        </div>
    );
}

export default CourseLandingPage;