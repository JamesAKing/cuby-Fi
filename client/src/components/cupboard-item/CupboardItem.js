import './CupboardItem.scss';

function CupboardItem({ itemId, itemName, toggleEditItemModal, deleteCupboardItem }) {
    return (
        <li key={itemId} id={itemId}>
            <p>{itemName}</p>
            <div>
                <button type="button" onClick={toggleEditItemModal}>EDIT</button>
                <button type="button" onClick={deleteCupboardItem}>DELETE</button>
            </div>
        </li>
    );
}

export default CupboardItem;