import './AddItemForm.scss';

function AddItemForm({ submitItem, toggleAddItemModal, handleFormChange }) {
    return (
        <form onSubmit={submitItem} onChange={handleFormChange}>
            <label htmlFor="itemName">
                <h3>Item</h3>
                <input type='text' name="itemName" />
            </label>
            <div >
                <h3>QTY</h3>
                <div>
                    <label htmlFor="qtyAmount">
                        <input type='number' name="qtyAmount" />
                    </label>
                    <label htmlFor="qtyUnit">
                        <select name="qtyUnit">
                            <option selected disabled value="cup">---Please Select One---</option>
                            <option value="cup">cup(s)</option>
                            <option value="gram">gram(s)</option>
                            <option value="unit">unit(s)</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="category">
                    <h3>CATEGORY</h3>
                    <select name="category">
                        <option selected disabled value="cup">---Please Select One---</option>
                        <option value="meat">MEAT</option>
                        <option value="vegetable">VEGETABLE</option>
                        <option value="sauce">SAUCE</option>
                    </select>
                </label>
            </div>
            <div>
                <button type="submit">Add ITEM</button>
                <button type="button" onClick={toggleAddItemModal}>X</button>
            </div>
        </form>
    );
}

export default AddItemForm;