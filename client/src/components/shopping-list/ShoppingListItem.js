import './ShoppingListItem.scss';

function ShoppingListItem({ item, addTocart }) {

    const { cartId, itemName, qtyNeeded, qtyUnit, inCart } = item;    
    // console.log(item);

    return (
        <li className="shopping__item">
            <div className="shopping__column">
                <h3 className="shopping__heading">ITEM</h3>
                <p className="shopping__text shopping__text--item">{itemName}</p>
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading">QTY</h3>
                <p className="shopping__text">{qtyNeeded} {qtyUnit}(s)</p>
            </div>
            <div className="shopping__column">
                {/* <h3 className="shopping__heading">RECIPE</h3> */}
                {/* <p className="shopping__text">{recipeName}</p> */}
            </div>
            <div className="shopping__column">
                <h3 className="shopping__heading shopping__heading--actions">ACTIONS</h3>
                <button id={cartId} className="btn shopping__btn" type="button" onClick={addTocart}>
                    {!inCart ? "ADD TO CART" : "ADDED"}
                </button>
            </div>               
        </li>
    );
}

export default ShoppingListItem;