import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {UserModel} from "../models/Users.js"

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
    const { username, password } = req.body;
    const user = await UserModel.countDocuments({ username });
  
    if (user > 0) {
      return res.json({ message: "User already exists!" });
    }
  
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = new UserModel({
    //   username,
    //   password: hashedPassword,
    // });
    // await newUser.save();

    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Await the hash function
      const newUser = new UserModel({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      res.json({ message: "User Registered Successfully!" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "An error occurred while registering the user." });
    }
  });
  

// router.post("/login", async (req,res)=>{
//     const {username,password} = req.body;
//     const user = await UserModel.findOne({ username });

//     if(!user){
//         return res.json({message:"User doesn't exist!"});
//     }

//     const isPasswordValid = await bcrypt.compare( password , user.password);
//     if(!isPasswordValid){
//         return res.json({message:"Username and password don't match!"});
//     }
//     const token = jwt.sign({id:user._id},"secret");
//     res.json({token,userID: user._id});

// }); 

export {router as userRouter};