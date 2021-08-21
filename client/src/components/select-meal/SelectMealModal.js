import "./SelectMealModal.scss";

function SelectMealModal({ recipeData, addToMealPlan, toggleSelectMealModal, selectedDay }) {

    return (
        <div className="select-meal">
            <div className="select-meal__card">
                <h2 className="select-meal__title">{`SELECT A MEAL FOR ${selectedDay.toUpperCase()}`}</h2>
                <ul className="select-meal__items">
                    {recipeData.map(recipe => {
                        return (
                            <li className="select-meal__item" key={recipe.recipeId} id={recipe.recipeId} onClick={addToMealPlan}>
                                {recipe.recipeName}
                            </li>
                        )
                    })}
                </ul>
                <button className="btn select-meal__btn" type="button" onClick={toggleSelectMealModal}>BACK TO MEAL PLAN</button>
            </div>
        </div>
    );

};

export default SelectMealModal;