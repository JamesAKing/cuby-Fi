import './MealCard.scss';
import { Link } from 'react-router-dom';
import { recipeBook } from "../../utilities/URLs";

function MealCard({ day, dayId, recipeName, recipeId, recipeImg, toggleSelectMealModal, confirmMealEaten, recipeCooked }) {
    
    if (recipeCooked) {
        recipeName = "ADD NEW RECIPE";
        recipeImg = null;
    }

    return (
        <li className="meal" style={{backgroundImage: `url(${recipeImg})`}}>
            <div className="meal__overlay">
                <h4 className="meal__text">{day}</h4>
                {/* <h3 className="meal__text">{recipeName}</h3> */}
                <Link className="meal__link" to={`${recipeBook}/${recipeId}`}><h3 className="meal__text">{recipeName}</h3></Link>
                <div className="meal__btns" id={dayId}>
                    <button className="btn" id={dayId} onClick={toggleSelectMealModal}>Select New Meal</button>
                    <button className="btn" id={dayId} onClick={confirmMealEaten}>{recipeCooked ? "Recipe Eaten" : "Eat Recipe"}</button>
                </div>
            </div>
        </li>
    );
}

export default MealCard;