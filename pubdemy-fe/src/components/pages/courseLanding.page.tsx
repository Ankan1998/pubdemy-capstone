import { useEffect } from "react";
import CustomText from "../atoms/customText.atom";
import CourseViewCard from "../organisms/courseViewCard.organism";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { SagaActions } from "../../saga/saga.actions";
import { CourseModel } from "../../models/course.model";
import { useSearchBarContext } from "../../context/searchBar.context";
import ErrorPopup from "../organisms/error.organism";
import FeatureTopic from "../organisms/featureTopic.organism";

const CourseLandingPage = ()=>{
    const token = useSelector((store: AppState) => store.user.token);
    let courseCombinedList = useSelector((store:AppState)=> store.courses);
    const {isEmpty,setSearchBarState} = useSearchBarContext();
    let dispatch = useDispatch();
    const isError = useSelector((store: AppState) => store.reduxError.isError);
    useEffect(() => {
        dispatch({ type: SagaActions.FETCH_RANDOM_COURSES_ASYNC, payload: token })
      }, []);
    return (<>

            <div className="container" style={{paddingTop:"5%"}}>
                <div className="row gap-2">
                    <strong><CustomText text={"Students are viewing"}/></strong>
                    {isError && <ErrorPopup/>}{!isEmpty&&courseCombinedList.searchedCourses.length==0&&<ErrorPopup message="No such Course"/>}
                    
      {isEmpty ? (
        courseCombinedList.randomCourses.map((course: CourseModel) => (
          <CourseViewCard
          courseId={course.id}
            imgUrl={course.imageUrl}
            courseTitle={course.courseTitle}
            author={course.author}
            rating={course.rating}
            studentRated={course.studentRated}
            coursePrice={course.price}
            discountedPrice={course.discountedPrice}
            isBestSellerTag={course.isBestseller}
          />
        ))
      ) : (
        courseCombinedList.searchedCourses.map((course: CourseModel) => (
          <CourseViewCard
          courseId={course.id}
            imgUrl={course.imageUrl}
            courseTitle={course.courseTitle}
            author={course.author}
            rating={course.rating}
            studentRated={course.studentRated}
            coursePrice={course.price}
            discountedPrice={course.discountedPrice}
            isBestSellerTag={course.isBestseller}
          />
        ))
      )}
      


                    
                </div>
            </div>
            <FeatureTopic/>
            </>

    );
}

export default CourseLandingPage;