import './Recipes.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipeBook } from '../../utilities/URLs';
import AddRecipeForm from './AddRecipeForm';
import RecipeCard from '../recipe-card/RecipeCard';

function Recipes({ recipeData }) {

    const [ showAddRecipe, setShowAddRecipe ] = useState(false);

    const toggleAddRecipe = () => {
        setShowAddRecipe(!showAddRecipe);
    };

    return (
        <>  {showAddRecipe && <AddRecipeForm toggleAddRecipe={toggleAddRecipe} />}
            <ul className="recipe-list">
                {recipeData.length === 0?
                    <p>Getting your Recipes...</p>:
                    recipeData.map(recipe => {
                        return (
                            <Link className="recipe-list__link" key={recipe.recipeId} to={`${recipeBook}/${recipe.recipeId}`} >
                                <RecipeCard
                                    recipeId={recipe.recipeId}
                                    recipeName={recipe.recipeName}
                                    recipeImg={recipe.image}
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

};

export default Recipes;