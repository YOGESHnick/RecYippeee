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

    return (
        <div className="create-recipte">
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
                <label htmlFor="cooikingTime" >Cooking Time (minutes)</label>
                <input 
                    type="text" 
                    id="cooikingTime" 
                    name="cooikingTime" 
                    onChange={handleChage}
                />
            </form>
        </div>
    )
}