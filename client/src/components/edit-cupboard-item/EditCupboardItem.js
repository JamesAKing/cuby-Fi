import './EditCupboardItem.scss';
import EditItemForm from '../forms/EditItemForm';

function EditCupboardItem({ submitItem, toggleEditItemModal, inputValues, handleFormChange }) {
    return (
        <section className="edit-item">
            <div className="edit-item__card">
                <h2>Edit Item</h2>
                <EditItemForm
                    submitItem={submitItem}
                    toggleEditItemModal={toggleEditItemModal}
                    handleFormChange={handleFormChange}
                    inputValues={inputValues}
                />
            </div>
        </section>
    );
}

export default EditCupboardItem;