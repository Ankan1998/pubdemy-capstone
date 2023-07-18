import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import RatingBestseller from '../molecules/ratingBestseller.molecule';
import LengthLecture from '../molecules/lengthLectureTag.molecule';
import CustomText from '../atoms/customText.atom';

type CartCourseCardProps = {
  imgUrl:string;
  title:string;
  author:string;
  rating:number;
  isBestSeller:boolean;
  numStudentRated:number;
  numLecture:number;
  lectureLength:number;
  actualPrice:number;
  discountedPrice:number;
}


const CartCourseCard = ({imgUrl,title,author,rating,isBestSeller,numStudentRated,numLecture,lectureLength,actualPrice,discountedPrice}:CartCourseCardProps) => {
  return (
    // <div className="cartCourseComponent">
      <div className="row shadow-sm" style={{padding:"5px"}}>
        <div className="col-2">
          <img src={imgUrl} alt={title} style={{ width: "100%" }}/>
        </div>
        <div className="col-6 d-flex flex-column">
          <strong>{title}</strong>
          <CustomText text={author} color='grey' styles={{marginBottom:'4%'}}/>
          <RatingBestseller isBestSeller={isBestSeller} numStudentRated={numStudentRated} numRating={rating} containerHeightInPx={''} />
          <LengthLecture length={lectureLength} lecture={numLecture}/>
        </div>
        <div className="col d-flex flex-column">
          <a href="#">Remove</a>
          <CustomText text={'Move to Wishlist'} color='purple'/>
        </div>
        <div className="col-1 d-flex">
          <div className='d-flex flex-column'>
          <strong><CustomText text={`Rs. ${discountedPrice.toString()}`} color='purple'/></strong>
          <CustomText text={`Rs. ${actualPrice.toString()}`} color='grey' styles={{textDecoration:'line-through'}}/>
          </div>
          <div>
          <FontAwesomeIcon icon={faTags} style={{color: "#7824bc",marginLeft:'75%'}} />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default CartCourseCard;