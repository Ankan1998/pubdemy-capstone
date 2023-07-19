import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../atoms/flatButton.atom";
import RatingBestseller from "../molecules/ratingBestseller.molecule";
import { faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomText from "../atoms/customText.atom";
import { useIndianRupeeFormatter } from "../../customHooks/IndianRupee.hook";

type CourseViewCardProps = {
  courseId:number;
    imgUrl:string;
    courseTitle:string;
    author:string;
    rating:number; 
    studentRated:number;
    coursePrice:number;
    discountedPrice:number;
    isBestSellerTag:boolean;
}

const CourseViewCard = ({courseId,imgUrl,coursePrice,courseTitle,author,rating,studentRated,discountedPrice,isBestSellerTag}:CourseViewCardProps)=>{
  const rupeeFormatter = useIndianRupeeFormatter
    return (
    <div className="col-2
     my-1">
      <Link to={`/coursedetail/${courseId}`} style={{ textDecoration: 'none' }}>
    <div className="card border-0 rounded-0">
        <img
          src={imgUrl}
          className="card-img-top"
          alt={courseTitle}
          height="125px"
        />
      <div className="card-body">
      <strong className="card-title">{courseTitle}</strong>
        <p className="card-text my-1"><CustomText text={author} color="grey"/></p>
        <p className="card-text my-1"><RatingBestseller isBestSeller={false} numStudentRated={studentRated} numRating={rating} containerHeightInPx={"20px"}/></p>
        <p className="my-1">
        <span><strong>{rupeeFormatter(discountedPrice)}</strong></span>
        <span style = {{ textDecoration: 'line-through',marginLeft:'8px' }}>{rupeeFormatter(coursePrice)}</span></p>
        {isBestSellerTag?<FlatButton text={"Bestseller"} backgroundColor={"#EDEB98"} textColor={"black"} inheritParentWidth={false}/>:<></>}

          </div>
        </div>
        </Link>
      </div>
  );

}

export default CourseViewCard;