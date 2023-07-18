import CourseDescriptionRow from "../organisms/courseDescription.organism";
import CourseDetailRow from "../organisms/courseDetailRow.organism";
import CourseEnrollCard from "../organisms/courseEnrollCard.organism";
import CourseOfferingRow from "../organisms/courseOffering.organism";
import CourseRequirementRow from "../organisms/courseRequirement.organism";

const CourseViewPage = () => {
    const borderBoxRowProps = {
      offerings: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
      ],
    };
  
    const pointwiseTextRowProps = {
      requirements: [
        "Point 1",
       "Point 2",
        "Point 3",
        "Point 4",
        "Point 5",
      ],
    };
  
    const paragraphRowProps = {
      title: "Paragraph Row",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida dui at elit eleifend, vitae luctus velit ullamcorper. Sed vel tempus dolor. Mauris sed enim ac leo blandit efficitur. Suspendisse potenti. Proin eget lacus vel sem euismod sodales. Aliquam maximus accumsan nisi, quis vehicula tellus efficitur ut.",
    };
  
    const customComponentRowProps = {
      title: "The Complete Python Bootcamp in Python",
      subtitle: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and gamese",
      author: "Angela",
      isBestseller:true,
      rating:4.7,
      numStudentRated:454,
      numStudentEnrolled:5656,
      lastUpdated:"12/2022",
      language:"English",
    };
    const cardProps = {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Card Title",
      price:3999,
      onAddCartClick:()=>{},
      onBuyNowClick:()=>{},
      
    };
    return (
  <div>
        <CourseDetailRow {...customComponentRowProps} />
        <div className="container">
        <div className="row justify-content-end">
  <div className="col-3">
    <div className="position-relative">
      <div 
        style={{
          position: "absolute",
          top: 100,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <CourseEnrollCard {...cardProps} />
      </div>
    </div>
  </div>
  </div>
  
  
        <div className='row'>
        <div className="col-8"> 
            <CourseOfferingRow {...borderBoxRowProps} />      
          </div>
          </div>
        <div className="row">
          <div className="col-8">
            <CourseRequirementRow {...pointwiseTextRowProps} />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <CourseDescriptionRow {...paragraphRowProps} />
          </div>
        </div>
  
      </div>
      </div>
  
    );
  }

  export default CourseViewPage;