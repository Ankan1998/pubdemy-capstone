import auth from "../middleware/middleware";
import express,{ Request, Response } from "express";
import path from "path";
import fs from "fs";
import Course from "../models/course_model";
import Video from "../models/video_model";

var router = express.Router()

// Get random 5 course
router.get('/random',auth,async (req:Request,res:Response)=>{
    try {
        const randomVideos = await Course.aggregate([{ $sample: { size: 5 } }]);
        res.json(randomVideos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong!' });
      }

})

// Get course according to search matching courseTitle
router.get('/search',auth,async (req:Request,res:Response)=>{
    try {
        let query:any = req.query.courseQuery;
        const regex = new RegExp(query, 'i');
        const courses = await Course.find({ courseTitle: { $regex: regex } });
        res.json(courses);
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong!' });
      }

})

// Stream video according to product id
router.get('/video/:id',async (req:Request,res:Response)=>{
    try {
        let theProduct = await Video.findOne({ id: parseInt(req.params.id) });
        console.log(theProduct)
        let videoPath = theProduct?.videoUrl || "";
        let vPath = path.resolve(videoPath);
        console.log(vPath)
        const fileSize = fs.statSync(vPath).size;
        const range = req.headers.range;
        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = end - start + 1;
            const file = fs.createReadStream(videoPath, { start, end });
            const headers = {
              "Content-Range": `bytes ${start}-${end}/${fileSize}`,
              "Accept-Ranges": "bytes",
              "Content-Length": chunkSize,
              "Content-Type": "video/mp4",
            };
            res.writeHead(206, headers);
            file.pipe(res);
          } else {
            const headers = {
              "Content-Length": fileSize,
              "Content-Type": "video/mp4",
            };
            res.writeHead(200, headers);
            fs.createReadStream(videoPath).pipe(res);
        }
        // const range = req.headers.range;
        // const chunk_size = 10 ** 6; // 1MB
        // let start = Number(range?.replace(/\D/g, ""));        
        // const end = Math.min(start + chunk_size, videoSize - 1);
        // const contentLength = end - start + 1;
        // const headers = {
        //   "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        //   "Accept-Ranges": "bytes",
        //   "Content-Type": "video/mp4",
        //   "Content-Length": contentLength,
        // };
        // const videoStream = fs.createReadStream(videoPath, { start, end });
        // res.writeHead(206, headers);
        // videoStream.pipe(res);
      } catch (error) {
        console.log(error);
      }
})

export default router;