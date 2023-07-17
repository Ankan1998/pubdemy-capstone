import auth from "../middleware/middleware";
import express,{ Request, Response } from "express";
import User from "../models/user_model";

var router = express.Router()

router.get('/random',auth,async (req:Request,res:Response)=>{

})

router.get('/search',auth,async (req:Request,res:Response)=>{

})


router.get('/video/:id',auth,async (req:Request,res:Response)=>{

})

export default router;