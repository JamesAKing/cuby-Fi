import './SingleRecipe.scss';

function SingleRecipe(props) {
    
    const recipeId = props.match.params.recipeId

    // // Move this check to App.js
    let recipeData = props.recipeData || [];
    const recipe = recipeData.filter(recipe => recipe.recipeId === recipeId).pop()

    const { recipeName, ingredients, instructions } = recipe


    return !recipe ? 
        <p>Getting Recipe...</p>:
        <main>
            <div className="recipe__hero">
                <div className="recipe__hero-overlay">
                    <img src="#" alt="go back" />
                    <h1>{recipeName}</h1>
                </div>
            </div>
            <section>
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {/* {ingredients.map(ingredient => <li>{ingredient}</li>)} */}
                        {ingredients.map((ingredient, i) => {
                            return (
                                <li key={i}>
                                    <p>{ingredient.itemName}</p>
                                    <p>{`${ingredient.amount} ${ingredient.units}(s)`}</p>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
                <div>
                    <h2>Instructions</h2>
                    <ul>
                        {instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
                    </ul>
                </div>
            </section>   
        </main>

}

export default SingleRecipe;