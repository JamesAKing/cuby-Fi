import './CupboardItem.scss';

function CupboardItem({ item, toggleEditItemModal, deleteCupboardItem }) {
    
    const { itemId, itemName, qty } = item

    console.log(item);
    return (
        <li id={itemId} className="cupboard__item">
            <div className="cupboard__column">
                <h3 className="cupboard__heading">ITEM</h3>
                <p className="cupboard__text cupboard__text--item">{itemName}</p>
            </div>
            <div className="cupboard__column">
                <h3 className="cupboard__heading">QTY</h3>
                <p className="cupboard__text">{qty.amount} {qty.unit}(s)</p>
            </div>
            <div className="cupboard__column"></div>
            <div className="cupboard__btns">
                <h3 className="cupboard__heading cupboard__heading--actions">ACTIONS</h3>
                <button className="btn" type="button" onClick={toggleEditItemModal}>EDIT</button>
                <button className="btn" type="button" onClick={deleteCupboardItem}>DELETE</button>
            </div>
        </li>
    );
}

export default CupboardItem;