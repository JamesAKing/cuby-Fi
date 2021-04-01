import './EditCupboardItem.scss';

function EditCupboardItem({ toggleEditItemModal }) {
    return (
        <section className="edit-item">
            <div className="edit-item__card">
                <h2>Edit Item</h2>
                <form>
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
            </div>
        </section>
    );
}

export default EditCupboardItem;