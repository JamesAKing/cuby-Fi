import './MealCard.scss';

function MealCard({ day, recipeName, dayId, imgURL, toggleSelectMealModal, confirmMealEaten, recipeCooked }) {
    
    return (
        <li className="meal">
            <div className="meal__overlay">
                <h4 className="meal__text">{day}</h4>
                <h3 className="meal__text">{recipeName}</h3>
                <div id={dayId}>
                    <button id={dayId} onClick={toggleSelectMealModal}>Select Meal</button>
                    <button id={dayId} onClick={confirmMealEaten}>{recipeCooked ? "Recipe Eaten" : "Eat Recipe"}</button>
                </div>
            </div>
        </li>
    );
}

export default MealCard;