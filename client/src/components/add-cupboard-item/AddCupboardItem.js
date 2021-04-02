import './AddCupboardItem.scss';
import AddItemForm from '../forms/AddItemForm';

function AddCupboardItem({ submitItem, toggleAddItemModal }) {

    return (
        <section className="add-item">
            <div className="add-item__card">
                <h2>Add Item</h2>
                <AddItemForm
                    submitItem={submitItem}
                    toggleAddItemModal={toggleAddItemModal}
                />
            </div>
        </section>
    );

}

export default AddCupboardItem;