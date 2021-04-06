import './SingleRecipe.scss';
import GoBackIcon from '../components/global/GoBackIcon';

function SingleRecipe(props) {
    
    const recipeId = props.match.params.recipeId

    // // Move this check to App.js
    let recipeData = props.recipeData || [];
    const recipe = recipeData.filter(recipe => recipe.recipeId === recipeId).pop()

    console.log(props);

    const { recipeName, ingredients, instructions, image } = recipe



    return !recipe ? 
        <p>Getting Recipe...</p>:
        <main>
            <div className="recipe__hero">
                <div className="recipe__hero-overlay">
                <img className="recipe__hero-img" src={null} alt="go back" />
                    <GoBackIcon routerProps={props}/>
                    <h1>{recipeName}</h1>
                </div>
            </div>
            <section className="recipe__info">
                <div>
                    <h2>Ingredients</h2>
                    <ul className="recipe__info">
                        {ingredients.map((ingredient, i) => {
                            return (
                                <li className="recipe__items" key={i}>
                                    <p>{ingredient.itemName} - {`${ingredient.amount} ${ingredient.units}(s)`}</p>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
                <div>
                    <h2>Instructions</h2>
                    <ul className="recipe__info">
                        {instructions.map((instruction, i) => <li className="recipe__items" key={i}>{instruction}</li>)}
                    </ul>
                </div>
            </section>   
        </main>

}

export default SingleRecipe;