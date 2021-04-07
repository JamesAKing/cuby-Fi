import './SingleRecipe.scss';
import GoBackIcon from '../components/global/GoBackIcon';

function SingleRecipe(props) {
    
    const recipeId = props.match.params.recipeId

    // // Move this check to App.js
    let recipeData = props.recipeData || [];
    const recipe = recipeData.filter(recipe => recipe.recipeId === recipeId).pop()

    const { recipeName, ingredients, instructions, image } = recipe

    return !recipe ? 
        <p>Getting Recipe...</p>:
        <main className="recipe">
            <div className="recipe__hero" style={{backgroundImage: `url(${image})`}}>
                <div className="recipe__hero-overlay">
                    <div className="recipe__hero-text">
                        <GoBackIcon routerProps={props}/>
                        <h1 className="recipe__hero-heading">{recipeName}</h1>
                    </div>
                </div>
            </div>
            <section className="recipe__info">
                <div className="recipe__column">
                    <h2 className="recipe__sub-heading">Ingredients</h2>
                    <ol className="recipe__items">
                        {ingredients.map((ingredient, i) => {
                            return (
                                <li className="recipe__item" key={i}>
                                    <p>{ingredient.itemName} - {`${ingredient.amount} ${ingredient.units}(s)`}</p>
                                </li>
                            )
                        })}
                        
                    </ol>
                </div>
                <div className="recipe__column">
                    <h2 className="recipe__sub-heading">Instructions</h2>
                    <ol className="recipe__items">
                        {instructions.map((instruction, i) => {
                            if (instruction.length > 0) {
                                return <li className="recipe__item" key={i}>{instruction}</li>
                            }
                            return <span key={i}></span>
                        })}
                    </ol>
                </div>
            </section>   
        </main>

}

export default SingleRecipe;