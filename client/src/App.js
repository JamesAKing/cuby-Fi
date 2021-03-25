import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header />

      <Switch>
        <Route to="/" exact component={null}/>
        <Route to="/about" component={null}/>
        <Route to="/contact-us" component={null}/>
        <Route to="/cupboard" component={null}/>
        <Route to="/recipe-book" component={null}/>
        <Route to="/schedule" component={null}/>
        <Route to="/shopping-list" component={null}/>
      </Switch>

      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;