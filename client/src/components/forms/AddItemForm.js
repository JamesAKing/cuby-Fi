import './AddItemForm.scss';

function AddItemForm({ submitItem, toggleAddItemModal, handleFormChange }) {
    return (
        <form className="modal-form" onSubmit={submitItem} onChange={handleFormChange}>
            <label htmlFor="itemName">
                <h3 className="modal-form__sub-title">Item</h3>
                <input className="modal-form__inputs" type='text' name="itemName" />
            </label>
            <div >
                <h3 className="modal-form__sub-title">QTY</h3>
                <div>
                    <label htmlFor="qtyAmount">
                        <input className="modal-form__inputs" type='number' name="qtyAmount" />
                    </label>
                    <label htmlFor="qtyUnit">
                        <select className="modal-form__inputs" name="qtyUnit">
                            <option selected disabled defaultValue="cup">---Please Select One---</option>
                            <option defaultValue="cup">cup(s)</option>
                            <option defaultValue="gram">gram(s)</option>
                            <option defaultValue="unit">unit(s)</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="category">
                    <h3 className="modal-form__sub-title">CATEGORY</h3>
                    <select className="modal-form__inputs" name="category">
                        <option selected disabled defaultValue="cup">---Please Select One---</option>
                        <option defaultValue="meat">MEAT</option>
                        <option defaultValue="vegetable">VEGETABLE</option>
                        <option defaultValue="sauce">SAUCE</option>
                    </select>
                </label>
            </div>
            <div>
                <button className="btn" type="submit">Add ITEM</button>
                <button className="btn" type="button" onClick={toggleAddItemModal}>CANCEL</button>
            </div>
        </form>
    );
}

export default AddItemForm;