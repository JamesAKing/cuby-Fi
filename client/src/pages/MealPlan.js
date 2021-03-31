import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MealCard from "../components/meal-card/MealCard";

function MealPlan() {

    const [mealPlan, setMealPlan] = useState(null);
    const [days, setDays] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])

    useEffect(() => {
        axios
            .get(MealPlanDB_URL)
            .then(resp => {
                if (!mealPlan) setMealPlan(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main className="food-plan">
            <header className="food-plan__header">
                <h1>Weekly Meal Plan</h1>
            </header>
            <ul className="food-plan__meals">
                {!mealPlan ?
                    <li>Getting your Meal Plan...</li> :
                    mealPlan.map((meal, i) => {
                        
                        return (
                            <MealCard key={meal.recipeId} day={days[i].toUpperCase()} recipeName={meal.recipeName} />
                        )

                    })
                }
            </ul>
        </main>
    );
}

export default MealPlan;