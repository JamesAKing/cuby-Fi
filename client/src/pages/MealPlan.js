import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { recipeBook } from '../utilities/URLs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MealCard from "../components/meal-card/MealCard";

function MealPlan() {

    const [mealPlan, setMealPlan] = useState(null);
    const [days] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

    useEffect(() => {
        axios
            .get(MealPlanDB_URL)
            .then(resp => {
                setMealPlan(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

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

    return (
        <main className="food-plan">
            <header className="food-plan__header">
                <h1 className="food-plan__title">WEEKLY MEAL PLAN</h1>
            </header>
            <button type="button" onClick={createShoppingList}>CREATE SHOPPING LIST</button>
            <ul className="food-plan__meals">
                {!mealPlan ?
                    <li>Getting your Meal Plan...</li> :
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