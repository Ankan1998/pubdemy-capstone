import React from "react";

type CourseRequirementRowProps = {
  requirements: string[];
}

const CourseRequirementRow = ({ requirements }: CourseRequirementRowProps) => {
  return (
    <div className="row p-3">
      <div className="col">
        <h4><strong>Requirements</strong></h4>
        <ul className="list-group my-3 mx-3">
          {requirements.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseRequirementRow;