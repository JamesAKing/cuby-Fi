import './ShoppingListItem.scss';
import { useState } from 'react';

function ShoppingListItem({ itemName, itemQty, itemRecipe }) {

    const [ inCart, setInCart ] = useState(false);

    const itemId = "abcdef"

    const itemInCart = (e) => {
        console.log(e.target.id);
        // search shopping list for id
        // set item in Cart to true
        // activate a visual clue to confirm item isn't still needed
    }

    return (
        <li className="shopping__item">
            <div className="shopping__column">
                <h3 className="shopping__heading">ITEM</h3>
                <p className="shopping__text">Sausages</p>
                {/* <p className="shopping__text">{itemName}</p> */}
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading">QTY</h3>
                <p className="shopping__text">7 Units</p>
                {/* <p className="shopping__text">{itemQty}</p> */}
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading">RECIPE</h3>
                <p className="shopping__text">Sausage and Mash</p>
                {/* <p className="shopping__text">{itemRecipe}</p> */}
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading">ACTIONS</h3>
                <button id={itemId} type="button" onClick={itemInCart}>IN CART</button>
            </div>               
        </li>
    );
}

export default ShoppingListItem;