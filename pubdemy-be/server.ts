import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/user";
import courseRouter from "./router/courses"
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_STR || "", {});
mongoose.connection.on("open", () => {
  console.log("PubdemyDB connected successfully !");
});

var app = express();

app.use(cors()); // enable cors at application level
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/course", courseRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server running @ port ${process.env.PORT} !`);
});