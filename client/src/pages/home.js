import { useState , useEffect } from "react";
import axios from "axios";

export const Home = ()=>{

    const [recipes ,setRecipes ]=useState([]);
    useEffect( ()=>{
        const fetchRecipe =  async ()=>{
            try {
                const response = await axios.get("http://localhost:3001/recipes");
                setRecipes(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchRecipe();
    },[]);
    return (
        <div>
            <h1 className="heading" >Recipes</h1> 
            <ul>
                {recipes.map( (recipe)=>(
                     <li key={recipe._id}>
                        <div>
                            <h2>Dish : {recipe.name}</h2> 
                        </div>
                        <div className="instructions">
                            <h2>Instructions:</h2> 
                            <h3>{recipe.instructions }</h3>
                        </div>
                        <img src={recipe.imageUrl} alt={recipe.namen} />
                        <h2>Cooking Time : {recipe.cookingTime} (minutes) </h2>
                     </li>
                ) )}
            </ul>
        </div>
    )
} 