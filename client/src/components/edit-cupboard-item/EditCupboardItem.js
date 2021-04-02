import './EditCupboardItem.scss';
import EditItemForm from '../forms/EditItemForm';

function EditCupboardItem({ submitEdittedItem, toggleEditItemModal }) {
    return (
        <section className="edit-item">
            <div className="edit-item__card">
                <h2>Edit Item</h2>
                <EditItemForm
                    submitEdittedItem={submitEdittedItem}
                    toggleEditItemModal={toggleEditItemModal}
                />
            </div>
        </section>
    );
}

export default EditCupboardItem;