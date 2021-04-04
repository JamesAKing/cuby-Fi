import './MealCard.scss';

function MealCard({ day, recipeName, dayId, imgURL, toggleSelectMealModal }) {
    
    return (
        <li className="meal">
            <div className="meal__overlay">
                <h4 className="meal__text">{day}</h4>
                <h3 className="meal__text">{recipeName}</h3>
                <button id={dayId} onClick={toggleSelectMealModal}>Select Meal</button>
            </div>
        </li>
    );
}

export default MealCard;