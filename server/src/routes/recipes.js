import {RecipeModel} from '../models/Recipes.js';
import {UserModel} from '../models/Users.js';
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
    
    try {
        const recipe = await RecipeModel.findById(req.body.recipeID )
        const user = await UserModel.findById(req.body.userID )

        user.savedRecipes.push(recipe);
        await user.save();

        res.json({savedRecipes: user.savedRecipes});
    } catch (err) {
        res.json(err);
    } 
});

router.get("/savedRecipes/ids", async (req,res)=>{
    try {
        const user = await UserModel.findById(req.body.userID )
        res.json({savedRecipes: user?.savedRecipes});
    } catch (err) {
        res.json(err);
    }
});
router.get("/savedRecipes", async (req,res)=>{
    try {
        const user = await UserModel.findById(req.params.userId);
        const savedRecipes = await RecipesModel.find({
            _id: { $in: user.savedRecipes },
        });

    console.log(savedRecipes);
    res.status(201).json({ savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

export { router as recipesRouter };