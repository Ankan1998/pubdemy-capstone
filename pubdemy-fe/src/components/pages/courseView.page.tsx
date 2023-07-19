import { useLocation, useNavigate, useParams } from "react-router-dom";
import CourseDescriptionRow from "../organisms/courseDescription.organism";
import CourseDetailRow from "../organisms/courseDetailRow.organism";
import CourseEnrollCard from "../organisms/courseEnrollCard.organism";
import CourseOfferingRow from "../organisms/courseOffering.organism";
import CourseRequirementRow from "../organisms/courseRequirement.organism";
import { useCourseDetailProvider } from "../../customHooks/courseDetailProvider.hook";
import { CourseModel } from "../../models/course.model";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart.reducer";
import { useIsAddedToCart } from "../../customHooks/isAddedToCart.hook";

const CourseViewPage = () => {
  const courseDetailProviderHook = useCourseDetailProvider;
  const isCourseInCart = useIsAddedToCart;
  const { id = "" } = useParams();
  const course:CourseModel = courseDetailProviderHook(parseInt(id))
  let dispatch = useDispatch()
  const navigate = useNavigate();


    const CourseContentRowProps = {
      offerings: [...course.courseContent
      ],
    };
  
    const RequirementRowProps = {
      requirements: [...course.requirements
      ],
    };
  
    const DescriptionRowProps = {
      paragraph: course.description
    };
  
    const customComponentRowProps = {
      title: course.courseTitle,
      subtitle: course.courseSubtitle,
      author: course.author,
      isBestseller:course.isBestseller,
      rating:course.rating,
      numStudentRated:course.studentRated,
      numStudentEnrolled:course.studentEnrolled,
      lastUpdated:course.lastUpdated,
      language:course.language,
    };
    const cardProps = {
      videoUrl: `http://localhost:5555/course/video/${course.id}`,
      price:3999,
      isOnAddCartDisable:isCourseInCart(course.id),
      onAddCartClick:()=>{
        dispatch(addToCart(course))
      },
      onBuyNowClick:()=>{
        navigate('/cart');
      },
      
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
            <CourseOfferingRow {...CourseContentRowProps} />      
          </div>
          </div>
        <div className="row">
          <div className="col-8">
            <CourseRequirementRow {...RequirementRowProps} />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <CourseDescriptionRow {...DescriptionRowProps} />
          </div>
        </div>
  
      </div>
      </div>
  
    );
  }

  export default CourseViewPage;