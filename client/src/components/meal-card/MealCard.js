import './MealCard.scss';
import { Link } from 'react-router-dom';
import { recipeBook } from "../../utilities/URLs";

function MealCard({ day, dayId, recipeName, recipeId, recipeImg, toggleSelectMealModal, confirmMealEaten, recipeCooked }) {
    
    if (recipeCooked) {
        recipeName = "ADD NEW RECIPE";
        recipeImg = null;
    }

    return (
        <li className="meal__item">
            <div className="meal">
                <Link className="meal__link" to={`${recipeBook}/${recipeId}`}>
                    <div className="meal__text-container">
                        <h2>{day}</h2>
                    </div>
                    <div>
                        {recipeImg &&
                        <img className="meal__img" src={recipeImg} alt={`${day}'s planned meal`} />}
                    </div>
                    <div className="meal__text-container">
                        <h3 className="meal__text">{recipeName}</h3>

                    </div>
                </Link>
                <div className="meal__btns" id={dayId}>
                    {/* Remove repeated id and use parent container's Id */}
                    <button className="btn" id={dayId} onClick={toggleSelectMealModal}>Select New Meal</button>
                    <button className="btn" id={dayId} onClick={confirmMealEaten}>{recipeCooked ? "Recipe Eaten" : "Eat Recipe"}</button>
                </div>
            </div>
        </li>
    )
}

export default MealCard;