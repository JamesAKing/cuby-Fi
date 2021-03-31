import './MealCard.scss';

function MealCard({ day, recipeName, imgURL }) {
    
    return (
        <li className="meal">
            <div className="meal__overlay">
                <h4 className="meal__text">{day}</h4>
                <h3 className="meal__text">{recipeName}</h3>
                {/* Add approx cook time? */}
            </div>
        </li>
    );
}

export default MealCard;