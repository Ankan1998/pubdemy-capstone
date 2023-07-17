"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./router/user"));
const courses_1 = __importDefault(require("./router/courses"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STR || "", {});
mongoose_1.default.connection.on("open", () => {
    console.log("PubdemyDB connected successfully !");
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)()); // enable cors at application level
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/user", user_1.default);
app.use("/course", courses_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server running @ port ${process.env.PORT} !`);
});
