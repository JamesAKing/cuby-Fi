import './EditCupboardItem.scss';
import EditItemForm from '../forms/EditItemForm';

function EditCupboardItem({ updateItem, toggleEditItemModal, inputValues, handleFormChange }) {
    
    return (
        <section className="edit-item">
            <div className="edit-item__card">
                <h2 className="edit-item__title">Edit Item</h2>
                <EditItemForm
                    updateItem={updateItem}
                    toggleEditItemModal={toggleEditItemModal}
                    handleFormChange={handleFormChange}
                    inputValues={inputValues}
                />
            </div>
        </section>
    );

}

export default EditCupboardItem;