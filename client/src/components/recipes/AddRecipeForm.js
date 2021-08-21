import './AddRecipeForm.scss';
import { useState } from 'react';

function AddRecipeForm({ toggleAddRecipe }) {
    
    const [ingredients, setIngredients ] = useState([]);
    const [instructions, setInstructions ] = useState([]);


    const submitRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const recipeName = form.recipeName.value;
        const recipeInstructions = form.recipeInstructions.value;

        if (recipeName && recipeInstructions) {
            setInstructions(recipeInstructions.split('\n'))
        } else {
            console.log('Fill in form')
        };
    };

    const addIngredient = e => {
        e.preventDefault();
        const form = e.target;
        const ingredientName = form[0].value
        const ingredientAmount = form[1].value
        const ingredientUnit = form[2].value
        
        if (ingredientName && ingredientAmount && ingredientUnit) {
            const newIngredients = ingredients
            newIngredients.push({
            itemName : ingredientName,
            amount : ingredientAmount,
            units : ingredientUnit
            })

            // Trial below method instead
            // const newIngredients = [
            //     ...ingredients,
            //     {
            //         itemName : ingredientName,
            //         amount : ingredientAmount,
            //         units : ingredientUnit
            //     }
            // ];

            setIngredients(newIngredients)
            form.reset();
        }
    }

    return (
        <aside className="add-recipe">
            <form id="ingredientsForm" onSubmit={addIngredient}></form>
            <form className="add-recipe__form" onSubmit={submitRecipe}>
                <h2>Add New Recipe</h2>
                <label htmlFor="recipeName">
                    <h3>Recipe</h3>
                    <input type='text' name="recipeName"/>
                </label>
                <div className="recipeIngredients">
                    <label htmlFor="ingredient">
                        <h3>Ingredients</h3>
                        <input form="ingredientsForm" type='text' name="ingredient" />
                    </label>
                    <label name='ingredientAmount'>
                        <input form="ingredientsForm" type="number" name="ingredientAmount" />
                    </label>
                    <label className="ingredientUnits">
                        <select form="ingredientsForm" name="ingredientUnits">
                            <option defaultValue="select" disabled>--- Select ---</option>
                            <option defaultValue="cup">Cup</option>
                        </select>
                    </label>
                    <button form="ingredientsForm" type="submit">Add Ingredient</button>
                </div>
                <label htmlFor="recipeInstructions">
                    <h3>Instructions</h3>
                    <textarea name="recipeInstructions"></textarea>
                </label>
                <div>
                    <button type='submit'>ADD NEW RECIPE</button>
                    <button type='button' onClick={toggleAddRecipe}>-- X --</button>
                </div>
                <ol>
                    {ingredients.map(ingredient => {
                        return <li>{ingredient.itemName}</li>
                    })}
                </ol>
                <ol>
                    {instructions.map(instruction => {
                            return <li>{instruction}</li>
                        })}
                </ol>
            </form>
        </aside>
    );

};

export default AddRecipeForm;