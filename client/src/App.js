import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { about, contactUs, cupboard, recipeBook, schedule, shoppingList } from "./utilities/URLs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
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
        <Route path={recipeBook} component={null}/>
        <Route path={schedule} component={null}/>
        <Route path={shoppingList} component={null}/>
      </Switch>

      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;