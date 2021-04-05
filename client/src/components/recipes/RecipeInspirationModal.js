import './RecipeInspirationModal.scss';
import RecipeCard from '../recipe-card/RecipeCard';

function RecipeInspirationModal({ inspiration, addNewMealToDB, toggleModal }) {
    console.log(inspiration);
    const { recipeName, recipeId, image } = inspiration;
    return (
        <div className="inspiration">
            <RecipeCard recipeId={recipeId} recipeName={recipeName} recipeImg={image}/>
            <div className="inspiration__btns">
                {inspiration && <button className="btn inspiration__btn" type="button" onClick={addNewMealToDB}>Add Meal</button>}
                <button className="btn inspiration__btn" type="button" onClick={toggleModal}>Go Back</button>
            </div>
        </div>
    );
}

export default RecipeInspirationModal;