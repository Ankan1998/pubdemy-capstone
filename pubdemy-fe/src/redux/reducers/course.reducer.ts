import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

let initialState: CourseModel[] = [];
export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // incrementLikes: (store, action: PayloadAction<number>) => {
    //   // console.log(action);
    //   // console.log("Within Products Reducer !");
    //   let id = action.payload;
    //   // change biz logic
    //   let index = store.findIndex(product => product.id === id);
    //   store[index].likes++; // Immer library
    //   return store;
    // },
    // deleteProduct: (store, action: PayloadAction<number>) => {
    //   let id = action.payload; // passed from the UI
    //   store = store.filter((product: ProductModel) => product.id !== id);
    //   return store;
    // },
    // addNewProduct: (store, action: PayloadAction<ProductModel>) => {
    //   store.push(action.payload);
    //   return store;
    // },
    setSearchCourses: (store, action: PayloadAction<CourseModel[]>) => {
        action.payload.forEach((courseNew:CourseModel)=>{
            if(!store.some((course:CourseModel)=>course.id===courseNew.id)){
                store.push(courseNew);
            }
        })
        return store;
      },
    setRandomCourses: (store, action: PayloadAction<CourseModel[]>) => {
      store = action.payload;
      return store;
    },
  },
});

export const { setSearchCourses,setRandomCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;