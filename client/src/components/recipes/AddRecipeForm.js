import './AddRecipeForm.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesDB_URL } from '../../utilities/APIEndPoints';

function AddRecipeForm() {
    
    const [ingredients ,setIngredients] = useState([]);
    const [instructions ,setInstructions] = useState([]);


    const addRecipetoDB = (e) => {
        e.preventDefault();

        const recipe = e.target
        const recipeName = recipe.recipeName.value;
        const recipeIngredients = recipe.recipeIngredients.value;
        const recipeInstructions = recipe.recipeInstructions.value;

        if (recipeName && recipeIngredients && recipeInstructions) {
            // setIngredients(recipeIngredients.split('\n'))
            // setInstructions(recipeInstructions.split('\n'))

            const newRecipe = {
                recipeName : recipeName, 
                image : "an image URL",
                imageType : "string",
                ingredients : recipeIngredients.split('\n'),
                instructions : recipeInstructions.split('\n'),
            }

            axios
                .post(RecipesDB_URL, {
                    newRecipe
                })
                .then(resp => {
                    console.log(resp);
                })
                .catch(err => {
                    console.log(err);
                })

            
            // e.target.recipeName.value = "";
            // e.target.recipeIngredients.value = "";
            // e.target.recipeInstructions.value = ""; 
        } else {
            console.log('Fill in form')
        };
    };


    // const resetState = () => {
    //     setIngredients([])
    //     setInstructions([])
    // }

    return (
        <form onSubmit={addRecipetoDB}>
            <h2>Add New Recipe</h2>
            <label htmlFor="recipeName">
                <h3>Recipe</h3>
                <input type='text' name="recipeName"/>
            </label>
            <label htmlFor="recipeIngredients">
                <h3>Ingredients</h3>
                <textarea name="recipeIngredients"></textarea>
            </label>
            <label htmlFor="recipeInstructions">
                <h3>Instructions</h3>
                <textarea name="recipeInstructions"></textarea>
            </label>
            <div>
                <button type='submit'>ADD NEW RECIPE</button>
            </div>
            <ol>
                {ingredients.map(ingredient => {
                        return <li>{ingredient}</li>
                    })}
            </ol>
            <ol>
                {instructions.map(instruction => {
                        return <li>{instruction}</li>
                    })}
            </ol>
            
        </form>
    );
}

export default AddRecipeForm;