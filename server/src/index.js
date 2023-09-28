import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {userRouter} from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);

mongoose.connect(
    "mongodb+srv://yogeshshamlin:Nickyzander%40%32%30%30%34@cluster0.4a6cuu0.mongodb.net/RecYipeee?retryWrites=true&w=majority"
)

app.listen(3000, ()=>{
    console.log("server started at PORT 3000");
});