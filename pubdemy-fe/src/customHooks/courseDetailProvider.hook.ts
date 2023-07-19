import { useSelector } from "react-redux";
import { CourseModel } from "../models/course.model";
import { AppState } from "../redux/store/store";

export function useCourseDetailProvider(courseId: number): CourseModel{
    let {cachedCourseData} = useSelector((store:AppState)=> store.courses);
    for(let i=0;i<cachedCourseData.length;i++){
        if(courseId===cachedCourseData[i].id){
            return cachedCourseData[i];
        }           
    }
    throw new Error(`Course with ID ${courseId} not found.`);

  };