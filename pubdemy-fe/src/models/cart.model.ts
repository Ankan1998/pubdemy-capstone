import { CourseModel } from "./course.model";

export class CartModel {
    constructor(
      public courses: CourseModel[]=[],
      public totalActualPrice: number=0,
      public totalDiscountedPrice: number=0,
      public cartSize:number=0
  
    ){}
  };