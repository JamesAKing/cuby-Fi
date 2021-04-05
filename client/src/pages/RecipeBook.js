import './RecipeBook.scss';
import { useEffect, useState } from 'react';
import { RecipesDB_URL } from "../utilities/APIEndPoints";
import { createRecipeObj } from '../utilities/functions';
import axios from 'axios';
import Recipes from "../components/recipes/Recipes";
import RecipeInspiration from "../components/get-recipes-API/RecipeInspiration";
import RecipeInspirationModal from "../components/recipes/RecipeInspirationModal";

const theMealDB_URL = 'https://www.themealdb.com';
const randomMealDB_URL = `${theMealDB_URL}/api/json/v1/1/random.php`;

function RecipeBook() {

    const [recipesData, setRecipesData] = useState([]);
    const [ showModal, setShowModal ] = useState(true);
    const [ inspiration, setInspiration ] = useState(null);


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


    const getRandomMeal = () => {
        console.log(1)
        axios
            .get(randomMealDB_URL)
            .then(resp=> {
                const randomRecipeObj = resp.data.meals[0];
                setInspiration(createRecipeObj(randomRecipeObj));
            })
            .catch(err => console.log(err))
    }

    const addNewMealToDB = () => {
        axios
            .post(RecipesDB_URL, inspiration)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        
        setInspiration(null);
    }

    console.log(inspiration);

    return (
        <main className="recipes">
            {showModal && inspiration && <RecipeInspirationModal inspiration={inspiration} addNewMealToDB={addNewMealToDB}/>}
            <header className="recipes__header">
                <h1 className="recipes__title">RECIPE BOOK</h1>
            </header>
            <Recipes recipesData={recipesData} />
            <RecipeInspiration getRandomMeal={getRandomMeal} inspiration={inspiration}/>
            <div className="spacer"></div>
        </main>
    )     
}

export default RecipeBook;