import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { recipeBook } from '../utilities/URLs';
import { formatMealPlanObj } from '../utilities/functions';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SelectMealModal from "../components/select-meal/SelectMealModal";
import MealCard from "../components/meal-card/MealCard";

function MealPlan({ recipeData }) {

    const [mealPlan, setMealPlan] = useState(null);
    const [ days ] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const [ loading, setLoading ] = useState(true);
    const [ showSelectMeal, setShowSelectMeal ] = useState(true);

    useEffect(() => {
        axios
            .get(MealPlanDB_URL)
            .then(resp => setMealPlan(resp.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }, []);

    const toggleSelectMealModal = () => {
        setShowSelectMeal(!showSelectMeal);
    }

    const addToMealPlan = (e) => {
        const selectedMeal = recipeData.filter(recipe => recipe.recipeId === e.target.id)
        const selectedDay = 2; // get this from link
        const formattedNewMeal = formatMealPlanObj(selectedMeal[0], selectedDay)
        const updatedMealPlan = mealPlan.map(meal => {
            if (meal.dayId === selectedDay) {
                return formattedNewMeal;
            }
            return meal
        })

        axios
            .post(MealPlanDB_URL, updatedMealPlan)
            .then(resp => setMealPlan(resp.data))
            .catch(err => console.log(err));
    }

    const createShoppingList = () => {

        let ingredientsObj = {}

        // Iterate through mealPlan
        mealPlan.forEach(meal => {
            // Get Recipe Ingredeints
            meal.ingredients.forEach(ingredient => {
                const ingredientKeys = Object.keys(ingredient)
                const amount = ingredient[ingredientKeys[0]]
                const units = ingredient[ingredientKeys[1]]
                // Combine Recipe Ingredients in ingredient : {amount, unit} format
                ingredientsObj[ingredientKeys[0]] ?
                    ingredientsObj[ingredientKeys[0]].amount += amount : 
                    ingredientsObj[ingredientKeys[0]] = {"amount" : amount, "units" : units}
            })
        })

        axios
            .post(MealPlanDB_URL, ingredientsObj)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }

    const clearMealPlan = () => {
        axios
            .delete(MealPlanDB_URL)
            .then(resp => setMealPlan(null))
            .catch(err => console.log(err))
    }

    // console.log(recipeData);
    // console.log(mealPlan);


    return (
        <main className="food-plan">
            <header className="food-plan__header">
                <h1 className="food-plan__title">WEEKLY MEAL PLAN</h1>
            </header>
            {showSelectMeal && <SelectMealModal recipeData={recipeData} toggleSelectMealModal={toggleSelectMealModal} addToMealPlan={addToMealPlan}/>}
            {!mealPlan && <button type="button" onClick={toggleSelectMealModal}>Create your meal plan</button>}
            <button type="button" onClick={createShoppingList}>CREATE SHOPPING LIST</button>
            <button type="button" onClick={clearMealPlan}>CLEAR MEAL PLAN</button>
            <ul className="food-plan__meals">
                {!mealPlan ?
                    <li>{loading ? "Getting your Meal Plan..." : "Create a new meal plan"}</li> :
                    mealPlan.map((meal, i) => {
                        return (
                            <Link key={meal.recipeId} className="food-plan__link" to={`${recipeBook}/${meal.recipeId}`} >
                                <MealCard
                                    day={days[i].toUpperCase()}
                                    recipeName={meal.recipeName}
                                />
                            </Link>
                        )
                    })
                }
            </ul>
        </main>
    );
}

export default MealPlan;