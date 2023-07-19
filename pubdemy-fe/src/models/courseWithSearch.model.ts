import { CourseModel } from "./course.model";

export class CourseWithSearchModel {
    constructor(
        public randomCourses: CourseModel[]=[],
      public searchedCourses: CourseModel[]=[],
      public cachedCourseData: CourseModel[]=[],
    ) {}
  }