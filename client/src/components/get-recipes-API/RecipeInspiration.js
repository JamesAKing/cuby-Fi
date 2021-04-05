import "./RecipeInspiration.scss";
import { useState } from 'react';
import axios from 'axios';
import { createRecipeObj } from '../../utilities/functions';
import { RecipesDB_URL } from '../../utilities/APIEndPoints';
import RecipeCard from '../recipe-card/RecipeCard'; 

// const theMealDB_URL = 'https://www.themealdb.com/api/json/v1/1';
const theMealDB_URL = 'https://www.themealdb.com';
const randomMealDB_URL = `${theMealDB_URL}/api/json/v1/1/random.php`;


function RecipeInspiration({ getRandomMeal, inspiration }) {

    // const [ inspiration, setInspiration ] = useState(null);

    // const getRandomMeal = () => {
    //     axios
    //         .get(randomMealDB_URL)
    //         .then(resp=> {
    //             const randomRecipeObj = resp.data.meals[0];
    //             setInspiration(createRecipeObj(randomRecipeObj));
    //         })
    //         .catch(err => console.log(err))
    // }

    // const addNewMealToDB = () => {
    //     axios
    //         .post(RecipesDB_URL, inspiration)
    //         .then(resp => console.log(resp))
    //         .catch(err => console.log(err));
    // }

    return (
        <div className="recipe-inspiration">
            <button className="btn" type="button" onClick={getRandomMeal}>{inspiration ? "Try Again" : "Need Some Inspiration?"}</button>
            {/* {inspiration && <RecipeCard recipeId={inspiration.recipeId} recipeName={inspiration.recipeName} recipeImg={inspiration.image}/>} */}
            {/* {inspiration && <button type="button" onClick={addNewMealToDB}>Add Meal</button>} */}
        </div>
    );
}

export default RecipeInspiration;