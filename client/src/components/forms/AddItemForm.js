import './AddItemForm.scss';

function AddItemForm({ submitItem, toggleAddItemModal }) {
    return (
        <form onSubmit={submitItem}>
            <label>
                <h3>Item</h3>
                <input type='text' />
            </label>
            <label>
                <h3>QTY</h3>
                <div>
                    <input type='number' />
                    <select>
                        <option>cup(s)</option>
                        <option>gram(s)</option>
                        <option>unit(s)</option>
                    </select>
                </div>
                <label>
                    <h3>CATEGORY</h3>
                    <select>
                        <option>MEAT</option>
                        <option>VEGETABLE</option>
                        <option>SAUCE</option>
                    </select>
                </label>
            </label>
            <div>
                <button type="submit">Add ITEM</button>
                <button type="button" onClick={toggleAddItemModal}>X</button>
            </div>
        </form>
    );
}

export default AddItemForm;