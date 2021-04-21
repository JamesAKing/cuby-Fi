import './CupboardItem.scss';

function CupboardItem({ item, toggleEditItemModal, deleteCupboardItem }) {
    
    const { itemId, itemName, qty } = item

    return (
        <li id={itemId} className="cupboard-item">
            <div className="cupboard-item__column">
                <h3 className="cupboard-item__heading">ITEM</h3>
                <p className="cupboard-item__text cupboard-item__text--item">{itemName}</p>
            </div>
            <div className="cupboard-item__column">
                <h3 className="cupboard-item__heading">QTY</h3>
                <p className="cupboard-item__text">{qty.amount} {qty.unit}(s)</p>
            </div>
            <div className="cupboard-item__column"></div>
            <div className="cupboard-item__btns">
                <h3 className="cupboard-item__heading cupboard-item__heading--actions">ACTIONS</h3>
                <button className="btn" type="button" onClick={toggleEditItemModal}>EDIT</button>
                <button className="btn" type="button" onClick={deleteCupboardItem}>DELETE</button>
            </div>
        </li>
    );
}

export default CupboardItem;