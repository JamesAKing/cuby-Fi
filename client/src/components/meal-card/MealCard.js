import './MealCard.scss';
import { Link } from 'react-router-dom';
import { recipeBook } from "../../utilities/URLs";

function MealCard({ day, dayId, recipeName, recipeId, recipeImg, toggleSelectMealModal, confirmMealEaten, recipeCooked }) {
    
    if (recipeCooked) {
        recipeName = "ADD NEW RECIPE";
        recipeImg = null;
    }

    // return (
    //     <li className="meal" style={{backgroundImage: `url(${recipeImg})`}}>
    //         <div className="meal__overlay">
    //             <h4 className="meal__text">{day}</h4>
    //             <Link className="meal__link" to={`${recipeBook}/${recipeId}`}><h3 className="meal__text">{recipeName}</h3></Link>
    //             <div className="meal__btns" id={dayId}>
    //                 <button className="btn" id={dayId} onClick={toggleSelectMealModal}>Select New Meal</button>
    //                 <button className="btn" id={dayId} onClick={confirmMealEaten}>{recipeCooked ? "Recipe Eaten" : "Eat Recipe"}</button>
    //             </div>
    //         </div>
    //     </li>
    // );

    return (
        <li className="meal__item">
            <div className="meal">
            {/* recipeId currently undefined */}
                <Link className="meal__link" to={`${recipeBook}/${recipeId}`}>
                    <div className="meal__text-container">
                        <h2>{day}</h2>
                    </div>
                    <div>
                        <img className="meal__img" src={recipeImg} alt={`${day}'s planned meal`} />
                    </div>
                    <div className="meal__text-container">
                        <h3>{recipeName}</h3>

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