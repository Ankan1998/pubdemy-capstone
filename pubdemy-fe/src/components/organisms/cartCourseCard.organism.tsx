import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import RatingBestseller from '../molecules/ratingBestseller.molecule';
import LengthLecture from '../molecules/lengthLectureTag.molecule';
import CustomText from '../atoms/customText.atom';
import TextButton from '../atoms/textButton.atom';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/reducers/cart.reducer';

type CartCourseCardProps = {
  courseId:number;
  imgUrl:string;
  title:string;
  subTitle:string;
  author:string;
  rating:number;
  isBestSeller:boolean;
  numStudentRated:number;
  numLecture:number;
  lectureLength:number;
  actualPrice:number;
  discountedPrice:number;
}


const CartCourseCard = ({courseId,imgUrl,title,author,subTitle,rating,isBestSeller,numStudentRated,numLecture,lectureLength,actualPrice,discountedPrice}:CartCourseCardProps) => {
  let dispatch = useDispatch();
  return (
      <div className="row shadow-sm" style={{padding:"5px"}}>
        <div className="col-2">
          <img src={imgUrl} alt={title} style={{ width: "100%" }}/>
        </div>
        <div className="col-6 d-flex flex-column">
          <strong>{title}</strong>
          <CustomText text={`By ${author} , ${subTitle}`} color='grey' styles={{marginBottom:'4%'}}/>
          <RatingBestseller isBestSeller={isBestSeller} numStudentRated={numStudentRated} numRating={rating} containerHeightInPx={''} />
          <LengthLecture length={lectureLength} lecture={numLecture}/>
        </div>
        <div className="col-2 d-flex flex-column align-items-end">
          <TextButton onClick={()=>dispatch(deleteFromCart(courseId))} text={'Remove'} isDisabled={false}/>
          <CustomText text={'Move to Wishlist'} color='purple'/>
        </div>
        <div className="col-2 d-flex">
          <div className='d-flex flex-column align-items-end'>
          <strong><CustomText text={`Rs. ${discountedPrice.toString()}`} color='purple'/></strong>
          <CustomText text={`Rs. ${actualPrice.toString()}`} color='grey' styles={{textDecoration:'line-through'}}/>
          </div>
          <div>
          <FontAwesomeIcon icon={faTags} style={{color: "#7824bc",marginLeft:'75%'}} />
          </div>
        </div>
      </div>
  );
}

export default CartCourseCard;