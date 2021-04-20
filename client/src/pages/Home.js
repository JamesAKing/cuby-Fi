import "./Home.scss";
import { cupboard, recipeBook, mealPlan, shoppingList } from "../utilities/URLs";
import CalendarIcon from "../assets/icons/calendar.png";
import FoodItemsIcon from "../assets/icons/food-items.png";
import RecipeBookIcon from "../assets/icons/recipe-book.png";
import ShoppingListIcon from "../assets/icons/shopping-list.png";
import HomeTile from '../components/home-tile/HomeTile';

function Home() {

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

}

export default Home;