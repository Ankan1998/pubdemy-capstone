import RatingBestseller from "../molecules/ratingBestseller.molecule";
import CustomText from "../atoms/customText.atom";
import IconTextBox from "../atoms/iconTextBox.atom";
import { faCircleInfo, faGlobe } from "@fortawesome/free-solid-svg-icons";


type CourseDetailRowProps = {
  title: string;
  subtitle: string;
  author: string;
  isBestseller:boolean;
  rating:number;
  numStudentRated:number;
  numStudentEnrolled:number;
  lastUpdated:string;
  language:string;


}

const CourseDetailRow=({ title, subtitle,author,isBestseller,rating,numStudentEnrolled,numStudentRated,lastUpdated,language }: CourseDetailRowProps) => {
  return (
    <div className="row bg-black text-white py-5 justify-content-center">
      <div className="col-8">
        <h2><strong><CustomText text={title} color="white"/></strong></h2>
        <h6><CustomText text={subtitle} color="white"/></h6>  
        <RatingBestseller isBestSeller={isBestseller} numStudentRated={numStudentRated} numRating={rating} containerHeightInPx={''} textColor="white" children={<CustomText text={`${numStudentEnrolled} students`} color="white"/>}/>   
        <CustomText text={`Created by ${author}`} color="white"/>
        <div className="d-flex align-items-center gap-2">
        <IconTextBox icon={faCircleInfo} text={`Last Updated ${lastUpdated}`}/>
        <IconTextBox icon={faGlobe} text={language}/>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailRow;