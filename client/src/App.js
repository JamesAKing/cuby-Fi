import './App.scss';
import { BrowserRouter, Route, Switch, routerProps} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesDB_URL } from './utilities/APIEndPoints';
// import { about, contactUs } from "./utilities/URLs"
import { cupboard, recipeBook, mealPlan, shoppingList } from "./utilities/URLs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import ShoppingList from "./pages/ShoppingList";
import MealPlanPage from "./pages/MealPlan";
import RecipeBookPage from "./pages/RecipeBook";
import SingleRecipe from "./pages/SingleRecipe";
import AddRecipeForm from './components/recipes/AddRecipeForm';
import CupboardPage from "./pages/Cupboard";
// import ObjectDetection from './components/coco-ssd/ObjectDetection';


function App() {

  const [ recipeData, setRecipeData ] = useState(null);

  useEffect(() => {
    axios
      .get(RecipesDB_URL)
      .then(resp => setRecipeData(resp.data))
      .catch(err => console.log(err));
  }, [])

  if(!recipeData) return <p>Loading...</p>

  return (
    <div className="App">
      <BrowserRouter>
      
      <Header />

      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path={about} component={null}/>
        <Route path={contactUs} component={null}/> */}
        <Route path={cupboard} exact component={CupboardPage}/>
        {/* <Route path={`${cupboard}/scan-item`} component={ObjectDetection}/> */}
        <Route path={recipeBook} exact component={RecipeBookPage}/>
        <Route path={`${recipeBook}/add-recipe`} component={AddRecipeForm}/>
        <Route path={`${recipeBook}/:recipeId`} render={routeProps => <SingleRecipe {...routeProps} recipeData={recipeData}/>} />
        <Route path={mealPlan} render={() => <MealPlanPage recipeData={recipeData}/>}/>
        {/* <Route path={mealPlan} component={mealPlanPage}/> */}
        <Route path={shoppingList} component={ShoppingList}/>
      </Switch>

      <Footer />
      
      </BrowserRouter>
    </div>
  );

}

export default App;