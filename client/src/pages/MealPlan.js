import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MealPlan() {

    const [mealPlan, setMealPlan] = useState(null);

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
            {!mealPlan ?
              <li>loading...</li> :
                mealPlan.map(meal => {
                    return (
                        <li key={meal.recipeId}>
                            <p>{meal.recipeName}</p>
                        </li>
                    )
                })
            }
        </main>
    );
}

export default MealPlan;