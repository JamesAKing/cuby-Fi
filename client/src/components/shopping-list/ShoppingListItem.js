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
        <ul className="list">
            {/*  */}
            <li className="list__item">
                <div className="list__column">
                    <h3 className="list__heading">ITEM</h3>
                    <p className="list__text">Sausages</p>
                    {/* <p className="list__text">{itemName}</p> */}
                </div>
                <div className="list__column">
                    <h3 className="list__heading">QTY</h3>
                    <p className="list__text">7 Units</p>
                    {/* <p className="list__text">{itemQty}</p> */}
                </div>
                <div className="list__column">
                    <h3 className="list__heading">RECIPE</h3>
                    <p className="list__text">Sausage and Mash</p>
                    {/* <p className="list__text">{itemRecipe}</p> */}
                </div>
                <div className="list__column">
                    <h3 className="list__heading">ACTIONS</h3>
                    <button id={itemId} type="button" onClick={itemInCart}>IN CART</button>
                </div>               
            </li>
            {/*  */}
        </ul>
    );
}

export default ShoppingListItem;