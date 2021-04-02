import './EditItemForm.scss';

function EditItemForm({ submitItem, toggleEditItemModal, inputValues, handleFormChange }) {

    const { itemName, category, qtyAmount, qtyUnit } = inputValues;
    // const { amount, unit } = inputValues.qty;

    console.log('inside:', inputValues)
    return (
        <form onSubmit={submitItem} onChange={handleFormChange}>
            <label htmlFor="itemName">
                <h3>Item</h3>
                <input type='text' name="itemName" value={itemName} onChange={handleFormChange}/>
                {/* <input type='text' name="itemName" onChange={handleFormChange}/> */}
            </label>
            <div >
                <h3>QTY</h3>
                <div>
                    <label htmlFor="qtyAmount">
                        <input type='number' value={qtyAmount} name="qtyAmount" />
                    </label>
                    <label htmlFor="qtyUnit">
                        <select name="qtyUnit">
                            <option selected disabled value={qtyUnit}>{qtyUnit}</option>
                            <option value="cup">cup(s)</option>
                            <option value="gram">gram(s)</option>
                            <option value="unit">unit(s)</option>
                        </select>
                    </label>
                </div>
                <label htmlFor="category">
                    <h3>CATEGORY</h3>
                    <select name="category">
                        <option selected disabled value={category}>{category}</option>
                        <option value="meat">MEAT</option>
                        <option value="vegetable">VEGETABLE</option>
                        <option value="sauce">SAUCE</option>
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