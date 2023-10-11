import {RecipeModel} from '../models/Recipes.js';
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req,res)=>{
    try {
        const response = await RecipeModel.find({});
        console.log(response);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
})

router.post("/", async (req,res)=>{
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        console.log(response);
        res.json(response);
    } catch (err) {
        res.json(err);
    } 
});

router.put("/", async (req,res)=>{
    const {userId,recipeId} = req.body;
    try {
        const response = await recipe.save();
        console.log(response);
        res.json(response);
    } catch (err) {
        res.json(err);
    } 
});

export { router as recipesRouter };