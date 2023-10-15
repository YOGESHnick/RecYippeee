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
                            <img src={recipe.imageUrl} alt={recipe.namen} />
                        </div>
                        <div className="instructions">
                            <h2>Instructions:</h2> 
                            <h3>{recipe.instructions }</h3>
                        </div>
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            <ul>
                                {recipe.ingredients.map( (item)=>(
                                    <li key={item}><h3>{item}</h3></li>
                                ))}
                            </ul>
                        </div>
                        <h2>Cooking Time : {recipe.cookingTime} (minutes) </h2>
                     </li>
                ) )}
            </ul>
        </div>
    )
} 