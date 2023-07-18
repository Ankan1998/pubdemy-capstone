export class CourseModel {
    constructor(
      public id: number = 0,
      public courseTitle: string = "",
      public courseSubtitle: string = "",
      public author: string = "",
      public rating: string = "",
      public studentRated: number = 0,
      public studentEnrolled: number = 0,
      public price: number = 0,
      public discountedPrice: number = 0,
      public isBestseller: boolean = false,
      public lastUpdated: string = "",
      public language: string = "",
      public courseContent: string[] = [],
      public courseLength: number = 0,
      public numOfLectures: number = 0,
      public requirements: string[] = [],
      public imageUrl: string = "",
      public description: string = "",
    ) {}
  }