import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { about, contactUs, cupboard, recipeBook, mealPlan, shoppingList } from "./utilities/URLs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import ShoppingList from "./pages/ShoppingList";
import mealPlanPage from "./pages/MealPlan";
import RecipeBookPage from "./pages/RecipeBook";
import RecipePage from "./pages/Recipe";
import AddRecipeForm from './components/recipes/AddRecipeForm';
import CupboardPage from "./pages/Cupboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header />

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path={about} component={null}/>
        <Route path={contactUs} component={null}/>
        <Route path={cupboard} component={CupboardPage}/>
        <Route path={recipeBook} exact component={RecipeBookPage}/>
        <Route path={`${recipeBook}/add-recipe`} component={AddRecipeForm}/>
        <Route path={`${recipeBook}/:recipeId`} component={RecipePage} />
        <Route path={mealPlan} component={mealPlanPage}/>
        <Route path={shoppingList} component={ShoppingList}/>
      </Switch>

      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;