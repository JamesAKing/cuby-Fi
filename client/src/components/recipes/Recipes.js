import './Recipes.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipeBook } from '../../utilities/URLs';
import AddRecipeForm from './AddRecipeForm';
import RecipeCard from '../recipe-card/RecipeCard';

function Recipes({ recipesData }) {

    const [ showAddRecipe, setShowAddRecipe ] = useState(false);

    const toggleAddRecipe = () => {
        setShowAddRecipe(!showAddRecipe);
    }

    return (
        <>  {showAddRecipe && <AddRecipeForm toggleAddRecipe={toggleAddRecipe} />}
            <ul className="recipe-list">
                {recipesData.length === 0?
                    <p>Getting your Recipes...</p>:
                    recipesData.map(recipe => {
                        return (
                            <Link key={recipe.recipeId} to={`${recipeBook}/${recipe.recipeId}`} >
                                <RecipeCard
                                    recipeId={recipe.recipeId}
                                    recipeName={recipe.recipeName}
                                />
                            </Link>
                        )
                    })
                }
            </ul>
            <div>
                <button type="button" onClick={toggleAddRecipe}>ADD NEW RECIPE</button>
            </div>
        </>
    );
}

export default Recipes;