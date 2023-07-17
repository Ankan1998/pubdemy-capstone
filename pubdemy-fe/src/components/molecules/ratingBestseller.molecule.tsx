import { ReactNode } from "react";
import FlatButton from "../atoms/flatButton.atom";
import { Rating } from "../atoms/rating.atom";

type RatingBestsellerProp = {
    isBestSeller:boolean;
    numStudentRated:number;
    numRating:number;
    containerHeightInPx:string;
    inheritparentWidth?:boolean;
    textColor?:string;
    children?:ReactNode;
}

const RatingBestseller = ({ isBestSeller,numStudentRated,numRating,containerHeightInPx,inheritparentWidth,textColor,children }: RatingBestsellerProp) => {
    let marginLeftForRating:string = isBestSeller?'8px':'0px';
    let ipw:boolean = inheritparentWidth ? inheritparentWidth:false;
    let studentTextColor:string = textColor?textColor:'black'
    return (
        <div className="d-flex align-items-center inline-flex" style={{ height: containerHeightInPx}}>
            {isBestSeller? <FlatButton text={"Bestseller"} backgroundColor={"#EDEB98"} textColor={"black"} inheritParentWidth={ipw}/>:<></>}
            <span style={{color:'orange', marginLeft:marginLeftForRating, marginRight:'8px'}}><strong>{numRating}</strong></span>
            <Rating numberofstars={numRating} color="orange"/>
            <span style={{color:studentTextColor,marginLeft:'8px',marginRight:'8px'}}>({numStudentRated})</span>
            {children}

        </div>
    );
  };
  
  export default RatingBestseller;