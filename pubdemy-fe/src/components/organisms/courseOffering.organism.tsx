import React from "react";
import IconTextBox from "../atoms/iconTextBox.atom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type CourseOfferingRowProps = {
  offerings: string[];
}

const CourseOfferingRow = ({ offerings }: CourseOfferingRowProps) => {
  return (
    <div className="row py-5">
    <div className="col">
    <div className="border border-dark rounded-0 p-3">
      <h4 className="mb-3"><strong>What you'll learn</strong></h4>
      <div className="row">
      <div className="col">
        {offerings.slice(0, Math.ceil(offerings.length / 2)).map((item, index) => (         
          <IconTextBox icon={faCheck} text={item} key={`item-${index}`}/>    
        ))}
        </div>
        <div className="col">
        {offerings.slice(Math.ceil(offerings.length / 2)).map((item, index) => (     
          <IconTextBox icon={faCheck} text={item} key={`item-${index}`}/>  
        ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default CourseOfferingRow;