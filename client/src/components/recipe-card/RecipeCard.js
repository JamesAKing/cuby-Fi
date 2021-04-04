import './RecipeCard.scss';
import MeatBalls from '../../assets/dummy-data-DELETE/meatballs.jpg';

function RecipeCard({ recipeId, recipeName, recipeImg }) {

    const image = recipeImg || MeatBalls;

    return (
        <li id={recipeId} className="recipe-card__list">
            <div className="recipe-card">
                <div>
                    <img className="recipe-card__img" src={image} alt="meatballs" />
                </div>
                <div className="recipe-card__text">
                    <h3>{recipeName}</h3>
                </div>
            </div>
        </li>
    );
    
}

export default RecipeCard;