import express,{ Request, Response } from "express";
import User from "../models/user_model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import auth from "../middleware/middleware";

var router = express.Router()


const generateToken = async function (email:any) {
    const token = jwt.sign({
        _id: email.toString()
    }, process.env.JWT_KEY ?? "")
    return token
}


const matchCred = async function (emailID:string, password:string) {
    const user = await User.findOne({
        email: emailID
    })
    if (!user) {
        throw new Error("Login Error")
    }
    try{
        const isSame = await bcrypt.compare(password,user.password!)
        if(!isSame){
            throw new Error("Login Error")
        }

    } catch {
        throw new Error("Login Error")
    }
    return user

}

// new user signup
router.post('/signup', async (req, res) => {
    let userReqBody = req.body   
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(userReqBody.password,saltRounds)
        let userObj = {...userReqBody,password:hashedPassword}
        let user = new User(userObj)
        await user.save()
        res.status(201).send({
            user,
        })
    } catch (e) {
        res.status(400).json({msg:"Cannot Signup Right Now"})
    }
})

//User login
router.post('/login', async (req, res) => {
    try {
        let user = await matchCred(req.body.email, req.body.password)
        let token = await generateToken(user.email)
        return res.status(200).send({
            user,
            token
        })
    } catch (e) {
        res.status(400).json({msg:"Cannot login Right Now"})
    }
})

export default router;