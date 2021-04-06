import "./RecipeInspiration.scss";

function RecipeInspiration({ getRandomMeal, inspiration }) {

    return (
        <div className="recipe-inspiration">
            <button className="btn" type="button" onClick={getRandomMeal}>{inspiration ? "Try Again" : "Need Some Inspiration?"}</button>
        </div>
    );
}

export default RecipeInspiration;