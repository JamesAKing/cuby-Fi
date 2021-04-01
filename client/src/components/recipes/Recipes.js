import './Recipes.scss';
import RecipeCard from '../recipe-card/RecipeCard';

function Recipes({ recipesData }) {
    return (
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
    );
}

export default Recipes;