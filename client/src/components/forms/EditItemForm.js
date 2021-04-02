import './EditItemForm.scss';

function EditItemForm({ submitEdittedItem, toggleEditItemModal }) {

    return (
        <form onSubmit={submitEdittedItem}>
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
                <button type="submit">UPDATE ITEM</button>
                <button type="button" onClick={toggleEditItemModal}>X</button>
            </div>
        </form>
    );

}

export default EditItemForm;