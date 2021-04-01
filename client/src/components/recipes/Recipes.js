import './Recipes.scss';
import RecipeCard from '../recipe-card/RecipeCard';

function Recipes({ recipesData }) {

    const addRecipe = () => {
        console.log("Recipe added");
    }

    return (
        <>
            <ul className="recipe-list">
                {recipesData.length === 0?
                    <p>Getting your Recipes...</p>:
                    recipesData.map(recipe => {
                        return (
                            <RecipeCard
                                recipeId={recipe.recipeId}
                                recipeName={recipe.recipeName}
                            />
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