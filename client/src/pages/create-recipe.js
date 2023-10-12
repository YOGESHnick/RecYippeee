import { useState } from "react";

export const CreateRecipe = ()=>{
    const [recipe,setRecipe]=useState({
        name: "",
        ingredients:[],
        instructions:"",
        imageUrl:"",
        cooikingTime:0,
        userOwner:0,
    });

    const handleChage = (event)=>{
        const {name,value}=event.target;
        setRecipe({...recipe, [name] : value})
    }
    const handleIngredientChage = (event,idx)=>{
        const {value}=event.target;
        const ingredients = recipe.ingredients;
        ingredients[idx]=value;
        setRecipe({...recipe, ingredients})
    }
    const addIngredient = ()=>{
        setRecipe({...recipe,ingredients: [...recipe.ingredients, ""]});
    }

    return (
        <div className="create-recipe">
            <h2>Create a recipe!</h2>
            <form>
                <label htmlFor="name" >Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={handleChage} 
                />
                <label htmlFor="ingredients" >Ingredients</label>
                {recipe.ingredients.map( (ingredient,idx)=>(
                    <input key={idx} type="text" name="ingredients" value={ingredient}
                    onChange={ (event)=>handleIngredientChage(event,idx) }
                    />
                ) )}
                <button onClick={addIngredient} type="button">+</button>
                <label htmlFor="instructions" >Instructions</label>
                <textarea 
                type="text" 
                    id="instructions" 
                    name="istructions" 
                    onChange={handleChage}
                ></textarea>
                <label htmlFor="imageUrl" >Image URL</label>
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    onChange={handleChage} 
                />
                <label htmlFor="cookingTime" >Cooking Time (minutes)</label>
                <input 
                    type="text" 
                    id="cookingTime" 
                    name="cookingTime" 
                    onChange={handleChage}
                />
                <button type="submit">Create RecYippee!</button>
            </form>
        </div>
    )
}