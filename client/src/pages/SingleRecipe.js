import './SingleRecipe.scss';
import { useEffect } from 'react';
import axios from 'axios';
import GoBackIcon from '../components/global/GoBackIcon';
import DeleteIcon from '../assets/icons/delete-trash-can.svg';
import { RecipesDB_URL } from '../utilities/APIEndPoints';

function SingleRecipe(props) {
    
    const recipeId = props.match.params.recipeId

    // TEST

    useEffect(() => {
        getRecipe(recipeId);
    }, [recipeId]);

    // 

    let recipeData = props.recipeData || [];
    const recipe = recipeData.filter(recipe => recipe.recipeId === recipeId).pop();

    const { recipeName, ingredients, instructions, image } = recipe;

    const getRecipe = async recipeId => {
        try {
            const resp = await axios.get(`${RecipesDB_URL}/${recipeId}`);
            return resp.data;
        } catch (err) {
            console.log(err);
        };
    };

    const deleteRecipe = async () => {
        try {
            const resp = await axios.delete(`${RecipesDB_URL}/${recipeId}`);
            console.log(resp.data);
        } catch (err) {
            console.log(err);
        };
    };

    return !recipe ? 
        <p>Getting Recipe...</p>:
        <main className="recipe">
            <header className="recipe__hero" style={{backgroundImage: `url(${image})`}}>
                <div className="recipe__hero-overlay">
                    <div className="recipe__hero-text">
                        <GoBackIcon routerProps={props}/>
                        <h1 className="recipe__hero-heading">{recipeName}</h1>
                    </div>
                </div>
                <button className="recipe__delete-btn" type="button" onClick={deleteRecipe}>
                    <img className="recipe__delete-icon" src={DeleteIcon} alt="delete recipe" />
                </button>
            </header>
            <section className="recipe__info">
                <div className="recipe__column">
                    <h2 className="recipe__sub-heading">Ingredients</h2>
                    <ol className="recipe__items">
                        {ingredients.map((ingredient, i) => {
                            return (
                                <li className="recipe__item" key={i}>
                                    <p>
                                        <span>{ingredient.itemName}</span>
                                        {ingredient.amount.length > 0 && <span> - {ingredient.amount}</span>}
                                        {ingredient.units.length > 0 && <span> {ingredient.units}{ingredient.amount === "1" ? "" : "s"}</span>}
                                    </p>
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