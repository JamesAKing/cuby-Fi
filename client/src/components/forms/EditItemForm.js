import './EditItemForm.scss';

function EditItemForm({ updateItem, toggleEditItemModal, inputValues, handleFormChange }) {

    const { itemName, category, qtyAmount, qtyUnit, itemId } = inputValues;

    return (
        <form id={itemId} onSubmit={updateItem} onChange={handleFormChange}>
            <label htmlFor="itemName">
                <h3>Item</h3>
                <input type='text' name="itemName" defaultValue={itemName} onChange={handleFormChange}/>
            </label>
            <div >
                <h3>QTY</h3>
                <div>
                    <label htmlFor="qtyAmount">
                        <input type='number' defaultValue={qtyAmount} name="qtyAmount" />
                    </label>
                    <label htmlFor="qtyUnit">
                        <select name="qtyUnit">
                            <option selected disabled defaultValue={qtyUnit}>{qtyUnit}</option>
                            <option defaultValue="cup">cup(s)</option>
                            <option defaultValue="gram">gram(s)</option>
                            <option defaultValue="unit">unit(s)</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="category">
                    <h3>CATEGORY</h3>
                    <select name="category">
                        <option selected disabled defaultValue={category}>{category}</option>
                        <option defaultValue="meat">MEAT</option>
                        <option defaultValue="vegetable">VEGETABLE</option>
                        <option defaultValue="sauce">SAUCE</option>
                    </select>
                </label>
            </div>
            <div>
                <button type="submit">Add ITEM</button>
                <button type="button" onClick={toggleEditItemModal}>X</button>
            </div>
        </form>
    );

}

export default EditItemForm;