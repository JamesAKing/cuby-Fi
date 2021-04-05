import './RecipeBook.scss';
import { useEffect, useState } from 'react';
import { RecipesDB_URL } from "../utilities/APIEndPoints";
import { createRecipeObj } from '../utilities/functions';
import axios from 'axios';
import Recipes from "../components/recipes/Recipes";
import RecipeInspiration from "../components/get-recipes-API/RecipeInspiration";
import RecipeInspirationModal from "../components/recipes/RecipeInspirationModal";
import GoBackIcon from '../components/global/GoBackIcon';

const theMealDB_URL = 'https://www.themealdb.com';
const randomMealDB_URL = `${theMealDB_URL}/api/json/v1/1/random.php`;

function RecipeBook(routerProps) {

    const [recipesData, setRecipesData] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
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
        axios
            .get(randomMealDB_URL)
            .then(resp=> {
                const randomRecipeObj = resp.data.meals[0];
                setInspiration(createRecipeObj(randomRecipeObj));
            })
            .then(setShowModal(true))
            .catch(err => console.log(err))
    }

    const addNewMealToDB = () => {
        axios
            .post(RecipesDB_URL, inspiration)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        
        setInspiration(null);
    }

    const toggleModal = () => {
        setInspiration(null);
        setShowModal(!showModal);
    };

    return (
        <main className="recipes">
            {showModal && inspiration && <RecipeInspirationModal inspiration={inspiration} addNewMealToDB={addNewMealToDB} toggleModal={toggleModal}/>}
            <header className="recipes__header">
                <GoBackIcon routerProps={routerProps} />
                <h1 className="recipes__title">RECIPE BOOK</h1>
            </header>
            <Recipes recipesData={recipesData} />
            <RecipeInspiration getRandomMeal={getRandomMeal}  inspiration={inspiration}/>
            <div className="spacer"></div>
        </main>
    )     
}

export default RecipeBook;