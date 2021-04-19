import "./Home.scss";
import { Link } from 'react-router-dom';
import { cupboard, recipeBook, mealPlan, shoppingList } from "../utilities/URLs";
import CalendarIcon from "../assets/icons/calendar.png";
import FoodItemsIcon from "../assets/icons/food-items.png";
import RecipeBookIcon from "../assets/icons/recipe-book.png";
import ShoppingListIcon from "../assets/icons/shopping-list.png";
import HomeTile from '../components/home-tile/HomeTile';

function Home(props) {

    return (
        <nav className="home">
            <ul className="home__items">
                <HomeTile 
                    title="Shopping List"
                    linkUrl={shoppingList}
                    linkImg={ShoppingListIcon}
                    reversed={false}
                />
                <HomeTile 
                    title="Weekly Meal Plan"
                    linkUrl={mealPlan}
                    linkImg={CalendarIcon}
                    reversed={true}
                />
                <HomeTile 
                    title="Recipe Book"
                    linkUrl={recipeBook}
                    linkImg={RecipeBookIcon}
                    reversed={false}
                />
                <HomeTile 
                    title="Cupboard"
                    linkUrl={cupboard}
                    linkImg={FoodItemsIcon}
                    reversed={true}
                />
            </ul>
        </nav>
    )


    // return (
    //     <nav>
    //         <ul className="home">
    //             <li className="home__item home__item--one">
    //                 <h2 className="home__title">Shopping List</h2>
    //                 <Link to={shoppingList}><img className="home__link-icons" src={ShoppingListIcon} alt="Shopping List" /></Link>
    //             </li>
    //             <li className="home__item home__item--reverse home__item--two">
    //                 <h2 className="home__title">Weekly Meal Plan</h2>
    //                 <Link to={mealPlan}><img className="home__link-icons" src={CalendarIcon} alt="mealPlan" /></Link>
    //             </li>
    //             <li className="home__item home__item--three">
    //                 <h2 className="home__title">Recipe Book</h2>
    //                 <Link to={recipeBook}><img className="home__link-icons" src={RecipeBookIcon} alt="Recipe Book" /></Link>
    //             </li>
    //             {/* <li className="home__item home__item--reverse home__item--four">
    //                 <h2 className="home__title">Cupboard</h2>
    //                 <Link to={cupboard}><img className="home__link-icons" src={FoodItemsIcon} alt="Cupboard" /></Link>
    //             </li> */}
    //             <li className="home__item-container">
    //                 {/* <h2 className="home__title">Cupboard</h2> */}
    //                 <Link className="home__item home__item--reverse home__item--four" to={cupboard}>
    //                     <h2 className="home__title">Cupboard</h2>
    //                     <img className="home__link-icons" src={FoodItemsIcon} alt="Cupboard" />
    //                 </Link>
    //             </li>
    //         </ul>
    //     </nav>
    // );
}

export default Home;