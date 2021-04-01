import './RecipeBook.scss';
import { useEffect, useState } from 'react';
import { RecipesDB_URL } from "../utilities/APIEndPoints";
import axios from 'axios';
import Recipes from "../components/recipes/Recipes";

function RecipeBook() {

    const [recipesData, setRecipesData] = useState([]);

    useEffect(() => {
        axios
            .get(RecipesDB_URL)
            .then(resp => (
                setRecipesData(resp.data)
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
            <Recipes recipesData={recipesData} />
        </main>
    )     
}

export default RecipeBook;