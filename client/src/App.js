import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { about, contactUs, cupboard, recipeBook, schedule, shoppingList } from "./utilities/URLs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import ShoppingList from "./pages/ShoppingList";
import FoodPlan from "./pages/MealPlan";
import RecipeBook from "./pages/RecipeBook";
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
        <Route path={recipeBook} component={RecipeBook}/>
        <Route path={schedule} component={FoodPlan}/>
        <Route path={shoppingList} component={ShoppingList}/>
      </Switch>

      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;