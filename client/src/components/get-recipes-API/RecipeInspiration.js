import "./RecipeInspiration.scss";
import { useState } from 'react';
import axios from 'axios';
import { createRecipeObj } from '../../utilities/functions';
import { RecipesDB_URL } from '../../utilities/APIEndPoints';
import RecipeCard from '../recipe-card/RecipeCard'; 

// const theMealDB_URL = 'https://www.themealdb.com/api/json/v1/1';
const theMealDB_URL = 'https://www.themealdb.com';
const randomMealDB_URL = `${theMealDB_URL}/api/json/v1/1/random.php`;


function RecipeInspiration() {

    const [ recipeIdea, setRecipeIdea ] = useState(null);

    const getRandomMeal = () => {
        axios
            .get(randomMealDB_URL)
            .then(resp=> {
                const randomRecipeObj = resp.data.meals[0];
                setRecipeIdea(createRecipeObj(randomRecipeObj));
            })
            .catch(err => console.log(err))
    }

    const addNewMealToDB = () => {
        axios
            .post(RecipesDB_URL, recipeIdea)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button type="button" onClick={getRandomMeal}>{recipeIdea ? "Get another Random Meal" : "Get Random Meal"}</button>
            {recipeIdea && <RecipeCard recipeId={recipeIdea.recipeId} recipeName={recipeIdea.recipeName} recipeImg={recipeIdea.image}/>}
            {recipeIdea && <button type="button" onClick={addNewMealToDB}>Add Meal</button>}
        </div>
    );
}

export default RecipeInspiration;