import './AddCupboardItem.scss';
import AddItemForm from '../forms/AddItemForm';

function AddCupboardItem({ submitItem, toggleAddItemModal, handleFormChange }) {

    return (
        <section className="add-item">
            <div className="add-item__card">
                <h2>Add Item</h2>
                <AddItemForm
                    submitItem={submitItem}
                    toggleAddItemModal={toggleAddItemModal}
                    handleFormChange={handleFormChange}
                />
            </div>
        </section>
    );

}

export default AddCupboardItem;