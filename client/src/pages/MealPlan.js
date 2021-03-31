import './MealPlan.scss';
import { MealPlanDB_URL } from '../utilities/APIEndPoints';
import { recipeBook } from '../utilities/URLs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className="food-plan__link" to={`${recipeBook}/${meal.recipeId}`} >
                                <MealCard
                                    key={meal.recipeId}
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