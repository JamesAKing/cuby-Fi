import './ShoppingListItem.scss';

function ShoppingListItem({ item, addToCart }) {

    const { cartId, itemName, qtyNeeded, qtyUnit, inCart } = item;    

    return (
        <li className="shopping__item">
            <div className="shopping__column">
                <h3 className="shopping__heading">ITEM</h3>
                <p className="shopping__text shopping__text--item">{itemName}</p>
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading">QTY</h3>
                <p className="shopping__text">{qtyNeeded} {qtyUnit} (s)</p>
            </div>
            <div className="shopping__column"></div>
            <div className="shopping__column">
                <h3 className="shopping__heading shopping__heading--actions">ACTIONS</h3>
                <button id={cartId} className="btn shopping__btn" type="button" onClick={addToCart}>
                    {!inCart ? "ADD TO CART" : "ADDED"}
                </button>
            </div>               
        </li>
    );

};

export default ShoppingListItem;