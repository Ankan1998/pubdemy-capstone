import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";
import { CourseWithSearchModel } from "../../models/courseWithSearch.model";

let initialState: CourseWithSearchModel={
  randomCourses: [],
  searchedCourses: [],
  cachedCourseData:[]
} ;
export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSearchCourses: (store, action: PayloadAction<CourseModel[]>) => {
      store.searchedCourses = []
      for(let i=0;i<action.payload.length;i++){
        store.searchedCourses.push(action.payload[i])
        store.cachedCourseData.push(action.payload[i])
      }
      return store;
      },
    setRandomCourses: (store, action: PayloadAction<CourseModel[]>) => {
      store.randomCourses = []
      for(let i=0;i<action.payload.length;i++){
        store.randomCourses.push(action.payload[i])
        store.cachedCourseData.push(action.payload[i])
      }
      return store;
    },
    emptyCourse:(store)=>{
      store.cachedCourseData=[]
      store.randomCourses=[]
      store.searchedCourses =[]
    }
  },
});

export const { setSearchCourses,setRandomCourses,emptyCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;