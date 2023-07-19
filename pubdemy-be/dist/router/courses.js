"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = __importDefault(require("../middleware/middleware"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const course_model_1 = __importDefault(require("../models/course_model"));
const video_model_1 = __importDefault(require("../models/video_model"));
var router = express_1.default.Router();
// Get random 5 course
router.post('/random', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomCourses = yield course_model_1.default.aggregate([{ $sample: { size: 5 } }]);
        res.json(randomCourses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}));
// Get course according to search matching courseTitle
router.post('/search', middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query.courseQuery;
        const regex = new RegExp(query, 'i');
        const courses = yield course_model_1.default.find({ courseTitle: { $regex: regex } });
        res.json(courses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}));
// Stream video according to product id
router.get('/video/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let theProduct = yield video_model_1.default.findOne({ id: parseInt(req.params.id) });
        let videoPath = (theProduct === null || theProduct === void 0 ? void 0 : theProduct.videoUrl) || "";
        let vPath = path_1.default.resolve(videoPath);
        const fileSize = fs_1.default.statSync(vPath).size;
        const range = req.headers.range;
        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = end - start + 1;
            const file = fs_1.default.createReadStream(videoPath, { start, end });
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": chunkSize,
                "Content-Type": "video/mp4",
            };
            res.writeHead(206, headers);
            file.pipe(res);
        }
        else {
            const headers = {
                "Content-Length": fileSize,
                "Content-Type": "video/mp4",
            };
            res.writeHead(200, headers);
            fs_1.default.createReadStream(videoPath).pipe(res);
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
