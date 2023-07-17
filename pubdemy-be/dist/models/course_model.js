"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
});
const Course = mongoose_1.default.model('Course', CourseSchema);
exports.default = Course;
