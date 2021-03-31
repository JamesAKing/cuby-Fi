import "./Home.scss";
import { Link } from 'react-router-dom';
import { about, contactUs, cupboard, recipeBook, mealPlan, shoppingList } from "../utilities/URLs";
// IMAGES/ICONS NEEDED - all in white
// SHopping List = List/Notepad
// Recipe Book - Book
// Schedule - Calendr?
// Cupboard - Cupboard/two doors

function Home(props) {
    return (
        <nav>
            <ul className="home">
                <li className="home__item home__item--one">
                    <h2 className="home__title">Shopping List</h2>
                    <Link to={shoppingList}><img src={null} alt="Shopping List" /></Link>
                </li>
                <li className="home__item home__item--reverse home__item--two">
                    <h2 className="home__title">Weekly Meal Plan</h2>
                    <Link to={mealPlan}><img src={null} alt="mealPlan" /></Link>
                </li>
                <li className="home__item home__item--three">
                    <h2 className="home__title">Recipe Book</h2>
                    <Link to={recipeBook}><img src={null} alt="Recipe Book" /></Link>
                </li>
                <li className="home__item home__item--reverse home__item--four">
                    <h2 className="home__title">Cupboard</h2>
                    <Link to={cupboard}><img src={null} alt="Cupboard" /></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Home;