import './EditItemForm.scss';

function EditItemForm({ updateItem, toggleEditItemModal, inputValues, handleFormChange }) {

    const { itemName, category, qtyAmount, qtyUnit, itemId } = inputValues;

    return (
        <form id={itemId} onSubmit={updateItem} onChange={handleFormChange}>
            <label htmlFor="itemName">
                <h3 className="edit-item__sub-heading">Item</h3>
                <input className="edit-item__input" type='text' name="itemName" defaultValue={itemName} onChange={handleFormChange}/>
            </label>
            <div >
                <h3 className="edit-item__sub-heading">QTY</h3>
                <div>
                    <label htmlFor="qtyAmount">
                        <input className="edit-item__input" type='number' defaultValue={qtyAmount} name="qtyAmount" />
                    </label>
                    <label htmlFor="qtyUnit">
                        <select className="edit-item__input" name="qtyUnit">
                            <option selected disabled defaultValue={qtyUnit}>{qtyUnit}</option>
                            <option defaultValue="cup">cup(s)</option>
                            <option defaultValue="gram">gram(s)</option>
                            <option defaultValue="unit">unit(s)</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="category">
                    <h3 className="edit-item__sub-heading">CATEGORY</h3>
                    <select className="edit-item__input" name="category">
                        <option selected disabled defaultValue={category}>{category}</option>
                        <option defaultValue="meat">MEAT</option>
                        <option defaultValue="vegetable">VEGETABLE</option>
                        <option defaultValue="sauce">SAUCE</option>
                    </select>
                </label>
            </div>
            <div>
                <button className="btn" type="submit">Add ITEM</button>
                <button className="btn" type="button" onClick={toggleEditItemModal}>Back to CUPBOARD</button>
            </div>
        </form>
    );

}

export default EditItemForm;