import "./PulloutMenu.scss";
import { Link } from 'react-router-dom';
import { home, cupboard, recipeBook, mealPlan, shoppingList } from '../../utilities/URLs';

function PulloutMenu({ active, rotateIcon }) {

    return (
        <div className={!active ? "pull-out pull-out__inactive" : "pull-out pull-out__active"}>
            <nav className="pull-out__nav">
                <ul className="pull-out__list">
                    <li className="pull-out__item"><Link onClick={rotateIcon} to={home} className="pull-out__link">HOME</Link></li>
                    <li className="pull-out__item"><Link onClick={rotateIcon} to={shoppingList} className="pull-out__link pull-out__link--c">SHOPPING LIST</Link></li>
                    <li className="pull-out__item"><Link onClick={rotateIcon} to={mealPlan} className="pull-out__link pull-out__link--u">MEAL PLAN</Link></li>
                    <li className="pull-out__item"><Link onClick={rotateIcon} to={recipeBook} className="pull-out__link pull-out__link--b">RECIPE BOOK</Link></li>
                    <li className="pull-out__item"><Link onClick={rotateIcon} to={cupboard} className="pull-out__link pull-out__link--y">CUPBOARD</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default PulloutMenu;