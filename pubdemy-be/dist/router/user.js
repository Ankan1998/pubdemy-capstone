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
const express_1 = __importDefault(require("express"));
const user_model_1 = __importDefault(require("../models/user_model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
var router = express_1.default.Router();
const generateToken = function (email) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const token = jsonwebtoken_1.default.sign({
            _id: email.toString()
        }, (_a = process.env.JWT_KEY) !== null && _a !== void 0 ? _a : "");
        return token;
    });
};
const matchCred = function (emailID, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.findOne({
            email: emailID
        });
        if (!user) {
            throw new Error("Login Error");
        }
        try {
            const isSame = yield bcryptjs_1.default.compare(password, user.password);
            if (!isSame) {
                throw new Error("Login Error");
            }
        }
        catch (_a) {
            throw new Error("Login Error");
        }
        return user;
    });
};
// new user signup
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userReqBody = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = yield bcryptjs_1.default.hash(userReqBody.password, saltRounds);
        let userObj = Object.assign(Object.assign({}, userReqBody), { password: hashedPassword });
        let user = new user_model_1.default(userObj);
        yield user.save();
        res.status(201).send({
            user,
        });
    }
    catch (e) {
        res.status(400).json({ msg: "Cannot Signup Right Now" });
    }
}));
//User login
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield matchCred(req.body.email, req.body.password);
        let token = yield generateToken(user.email);
        return res.status(200).send({
            user,
            token
        });
    }
    catch (e) {
        res.status(400).json({ msg: "Cannot login Right Now" });
    }
}));
// // User logout
// router.get('/logout', auth, async (req:Request, res:Response) => {
//     let reqBody = req.body;
//     try {
//         reqBody.user.tokens = reqBody.user.tokens.filter((token:any) => {
//             return token.token != reqBody.token
//         })
//         reqBody.user.save()
//         res.send("User logged out")
//     } catch(e) {
//         res.status(400).json({msg:"Cannot logout Right Now"})
//     }
// })
exports.default = router;
