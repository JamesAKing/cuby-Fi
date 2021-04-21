import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { formatMealPlanObj } from '../utilities/functions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GoBackIcon from '../components/global/GoBackIcon';
import SelectMealModal from "../components/select-meal/SelectMealModal";
import MealCard from "../components/meal-card/MealCard";
import AddedToDBModal from '../components/added-to-db/AddedToDBModal';

function MealPlan(routerProps) {

    const [mealPlan, setMealPlan] = useState(null);
    const [ days ] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const [ loading, setLoading ] = useState(true);
    const [ showSelectMeal, setShowSelectMeal ] = useState(false);
    const [ selectedDay, setSelectedDay ] = useState(null);

    const { recipeData } = routerProps;

    useEffect(() => {
        axios
            .get(MealPlanDB_URL)
            .then(resp => setMealPlan(resp.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, []);

    const toggleSelectMealModal = (e) => {
        setShowSelectMeal(!showSelectMeal);
        !selectedDay ? setSelectedDay(e.target.parentNode.id) : setSelectedDay(null);
    }

    const addToMealPlan = (e) => {
        const selectedMeal = recipeData.filter(recipe => recipe.recipeId === e.target.id)
        const formattedNewMeal = formatMealPlanObj(selectedMeal[0], selectedDay)

        axios
            .post(`${MealPlanDB_URL}/${selectedDay}`, formattedNewMeal)
            .then(resp => setMealPlan(resp.data))
            .then(() => toggleSelectMealModal())
            .catch(err => console.log(err));
    };

    const createShoppingList = () => {
        let ingredientArr = [];

        mealPlan.forEach(meal => {
            // Get Recipe Ingredeints
            meal.ingredients.forEach(ingredient => {
                const itemName = ingredient.itemName
                const amount = ingredient.amount
                const units = ingredient.units
                ingredientArr.push({
                   itemName : itemName,
                   amount : amount,
                   units : units 
                })
            })
        })

        axios
        .post(MealPlanDB_URL, ingredientArr)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    };

    const confirmMealEaten = (e) => {
        const dayId = e.target.parentNode.id 
        axios
            .put(`${MealPlanDB_URL}/${dayId}`)
            .then(resp => setMealPlan(resp.data))
            .catch(err => console.log(err));
    };

    const clearMealPlan = () => {
        axios
            .delete(MealPlanDB_URL)
            .then(() => setMealPlan(null))
            .catch(err => console.log(err))
    }

    return (
        <main className="meal-plan">
            <header className="meal-plan__header">
                <GoBackIcon routerProps={routerProps} />
                <h1 className="meal-plan__title">WEEKLY MEAL PLAN</h1>
            </header>
            {showSelectMeal && <SelectMealModal recipeData={recipeData} selectedDay={days[selectedDay - 1]} toggleSelectMealModal={toggleSelectMealModal} addToMealPlan={addToMealPlan}/>}
            <div className="meal-plan__btns">
                {mealPlan && <button className="btn" type="button" onClick={createShoppingList}>CREATE SHOPPING LIST</button>}
                <button className="btn" type="button" onClick={clearMealPlan}>CLEAR MEAL PLAN</button>
            </div>
            <ul className="meal-plan__items">
                {!mealPlan ?
                    <li>{loading ? "Getting your Meal Plan..." : "Create a new meal plan"}</li> :
                    mealPlan.map((meal, i) => {
                        return (
                            <MealCard
                                key={meal.dayId}
                                dayId={meal.dayId}
                                day={days[i].toUpperCase()}
                                recipeName={meal.recipeName}
                                recipeImg={meal.image}
                                recipeId={meal.recipeId}
                                recipeCooked={meal.recipeCooked}
                                toggleSelectMealModal={toggleSelectMealModal}
                                confirmMealEaten={confirmMealEaten}
                            />
                        )
                    })
                }
            </ul>
            <AddedToDBModal />
        </main>
    );
}

export default MealPlan;