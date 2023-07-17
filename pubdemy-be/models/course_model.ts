import mongoose from "mongoose";
const {Schema} = mongoose;

const CourseSchema = new Schema({
    id: Number,
    courseTitle: String,
    courseSubtitle: String,
    author: String,
    rating: Number,
    studentRated: Number,
    studentEnrolled: Number,
    price: Number,
    discountedPrice: Number,
    isBestseller: Boolean,
    lastupdated: String,
    language: String,
    courseContent: [String],
    courseLength: Number,
    numOfLectures: Number,
    requirements: [String],
    imageUrl: String,
    description: String,

})

const Course = mongoose.model('Course', CourseSchema)
export default Course;