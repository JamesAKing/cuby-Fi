import "./SelectMealModal.scss";

function SelectMealModal({ recipeData, addToMealPlan, toggleSelectMealModal }) {

    return (
        <div className="select-meal">
            <div className="select-meal__card">
                <ul>
                    {recipeData.map(recipe => {
                        return (
                            <li key={recipe.recipeId} id={recipe.recipeId} onClick={addToMealPlan}>
                                {recipe.recipeName}
                            </li>
                        )
                    })}
                </ul>
                <button type="button" onClick={toggleSelectMealModal}>-- X --</button>
            </div>
        </div>
    );
}

export default SelectMealModal;