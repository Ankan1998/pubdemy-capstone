import VideoPlayer from "../atoms/videoPlayer.atom";
import CustomText from "../atoms/customText.atom";
import FlatButton from "../atoms/flatButton.atom";
import IconTextBox from "../atoms/iconTextBox.atom";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type CourseEnrollCardProps = {
  videoUrl: string;
  price: number;
  onAddCartClick:()=>void;
  onBuyNowClick:()=>void;
}

const CourseEnrollCard = ({
  videoUrl,
  price,
  onAddCartClick,
  onBuyNowClick,
 
}: CourseEnrollCardProps) => {
  return (
    <div className="card">
      <div className="card-body p-0">
         <VideoPlayer videoUrl={videoUrl} /> {/* Need to modify with iframe*/}
        <div className="card-body px-3">
          <h3><strong><CustomText text={`Rs. ${price.toString()}`}/></strong></h3>
          <div className="d-flex flex-column align-items-center justify-content-center mt-3 gap-2">
          <FlatButton text={"Add to cart"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={true} onClick={onAddCartClick}/>
          <FlatButton text={"Buy Now"} backgroundColor={"white"} textColor={"black"} inheritParentWidth={true} onClick={onBuyNowClick} border="1px solid black"/>
          <CustomText text={"30-Day Money-back Guarantee"} color="grey"/>
          </div>
          <div className="my-3">
            <h6><strong>This course includes:</strong></h6>
            <ul className="list-group mb-0">
              {Array.from({ length: 5 }).map((_, index) => <IconTextBox icon={faCircleInfo} text={"This course is good"}/>)}
            </ul>
          </div>
          <div className="d-flex justify-content-between">
            <strong>Share</strong>
            <strong>Gift</strong>
            <strong>Apply Coupon</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollCard;