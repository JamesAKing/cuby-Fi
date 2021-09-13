import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipesDB_URL } from './utilities/APIEndPoints';
import { cupboard, recipeBook, mealPlan, shoppingList } from "./utilities/URLs";
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import Header from "./components/header/Header";
import Home from './pages/Home';
import ShoppingList from "./pages/ShoppingList";
import MealPlanPage from "./pages/MealPlan";
import RecipeBookPage from "./pages/RecipeBook";
import SingleRecipe from "./pages/SingleRecipe";
import CupboardPage from "./pages/Cupboard";


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

      <ScrollToTop />
      
      <Header />

      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path={about} component={null}/>
        <Route path={contactUs} component={null}/> */}
        <Route path={cupboard} exact component={CupboardPage}/>
        <Route path={recipeBook} exact render={(routerProps) => <RecipeBookPage {...routerProps} recipeData={recipeData} setRecipeData={setRecipeData} />} />
        <Route path={`${recipeBook}/:recipeId`} render={routeProps => <SingleRecipe {...routeProps} recipeData={recipeData}/>} />
        <Route path={mealPlan} render={(routerProps) => <MealPlanPage {...routerProps} recipeData={recipeData}/>}/>
        <Route path={shoppingList} component={ShoppingList}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );

}

export default App;