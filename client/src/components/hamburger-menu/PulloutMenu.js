import "./PulloutMenu.scss";
import { NavLink } from 'react-router-dom';
import { home, cupboard, recipeBook, mealPlan, shoppingList } from '../../utilities/URLs';

function PulloutMenu({ active, rotateIcon }) {

    return (
        <div className={!active ? "pull-out pull-out__inactive" : "pull-out pull-out__active"}>
            <nav className="pull-out__nav">
                <ul className="pull-out__list">
                    <li className="pull-out__item"><NavLink onClick={rotateIcon} to={home} className="pull-out__link" exact activeClassName="pull-out__link--selected">HOME</NavLink></li>
                    <li className="pull-out__item"><NavLink onClick={rotateIcon} to={shoppingList} className="pull-out__link pull-out__link--c" activeClassName="pull-out__link--selected">SHOPPING LIST</NavLink></li>
                    <li className="pull-out__item"><NavLink onClick={rotateIcon} to={mealPlan} className="pull-out__link pull-out__link--u" activeClassName="pull-out__link--selected">MEAL PLAN</NavLink></li>
                    <li className="pull-out__item"><NavLink onClick={rotateIcon} to={recipeBook} className="pull-out__link pull-out__link--b" activeClassName="pull-out__link--selected">RECIPE BOOK</NavLink></li>
                    <li className="pull-out__item"><NavLink onClick={rotateIcon} to={cupboard} className="pull-out__link pull-out__link--y" activeClassName="pull-out__link--selected">CUPBOARD</NavLink></li>
                </ul>
            </nav>
        </div>
    );
    
}

export default PulloutMenu;