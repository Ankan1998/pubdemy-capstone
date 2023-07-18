import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../atoms/flatButton.atom";
import RatingBestseller from "../molecules/ratingBestseller.molecule";
import { faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";

type CourseViewCardProps = {
    imgUrl:string;
    courseTitle:string;
    author:string;
    rating:number; 
    studentRated:number;
    coursePrice:number;
    discountedPrice:number;
    isBestSellerTag:boolean;
}

const CourseViewCard = ({imgUrl,coursePrice,courseTitle,author,rating,studentRated,discountedPrice,isBestSellerTag}:CourseViewCardProps)=>{
    return (
    <div className="col-2 my-1">
    <div className="card">
      {/* <Link to={`/dashboard/productdetails/${props.productdetails.id}`}> */}
        <img
          src={imgUrl}
          className="card-img-top"
          alt={courseTitle}
          height="125px"
        />
      {/* </Link> */}
      <div className="card-body">
      <h6 className="card-title">{courseTitle}</h6>

        <p className="card-text my-1">{author}</p>

        <p className="card-text my-1"><RatingBestseller isBestSeller={false} numStudentRated={studentRated} numRating={rating} containerHeightInPx={"20px"}/></p>
        <p className="my-1">
        <FontAwesomeIcon icon={faIndianRupeeSign} />
        <span><strong>{discountedPrice}</strong></span>
        <span style = {{ textDecoration: 'line-through',marginLeft:'8px' }}>{coursePrice}</span></p>
        <FlatButton text={"Bestseller"} backgroundColor={"#EDEB98"} textColor={"black"} inheritParentWidth={false}/>

          </div>
        </div>
      </div>
  );

}

export default CourseViewCard;