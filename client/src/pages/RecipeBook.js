import './RecipeBook.scss';
import { useEffect, useState } from 'react';
import { RecipesDB_URL } from "../utilities/APIEndPoints";
import axios from 'axios';
import RecipeCard from '../components/recipe-card/RecipeCard';

function RecipeBook() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get(RecipesDB_URL)
            .then(resp => (
                setRecipes(resp.data)
            ))
            .catch(err => {
                console.log(err)
            });  
    }, []);
    // Image, imageType, recipeId, recipeName, userRating

    return (
        <main className="recipes">
            <header className="recipes__header">
                <h1>RECIPE BOOK</h1>
            </header>
            <ul className="recipes__list">
                {recipes.length === 0?
                    <p>Getting your Recipes...</p>:
                    recipes.map(recipe => {
                        return (
                            <RecipeCard
                                recipeId={recipe.recipeId}
                                recipeName={recipe.recipeName}
                            />
                        )
                    })
                }
            </ul>
        </main>
    )     
}

export default RecipeBook;