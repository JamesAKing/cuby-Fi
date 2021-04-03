import './Recipes.scss';
import { Link } from 'react-router-dom';
import { recipeBook } from '../../utilities/URLs';
import RecipeCard from '../recipe-card/RecipeCard';

function Recipes({ recipesData }) {

    const addRecipe = () => {
        console.log("Recipe added");
    }

    // console.log(recipesData);

    return (
        <>
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
                <button type="button" onClick={addRecipe}>ADD NEW RECIPE</button>
                {/* decide if MODAL or LINK */}
            </div>
        </>
    );
}

export default Recipes;