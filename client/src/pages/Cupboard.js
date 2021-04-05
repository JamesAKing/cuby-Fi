import './Cupboard.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CupboardDB_URL } from '../utilities/APIEndPoints';
import { createItem, formValid } from '../utilities/functions';
import GoBackIcon from '../components/global/GoBackIcon';
// import { cupboard } from '../utilities/URLs';
import ColumnHeader from "../components/global/ColumnHeader";
import AddCupboardItem from '../components/add-cupboard-item/AddCupboardItem';
import EditCupboardItem from '../components/edit-cupboard-item/EditCupboardItem';
import CupboardItem from '../components/cupboard-item/CupboardItem';
import ObjectDetection from "../components/coco-ssd/ObjectDetection";

function CupboardPage(routerProps) {

    const [ cupboardData, setCupboardData ] = useState([]);
    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showAddModal, setShowAddModal ] = useState(false);
    const [ inputValues, setInputValues ] = useState({
        itemName : '',
        itemId : null,
        qtyAmount : 0,
        qtyUnit : '',
        category: ''
    });

    useEffect(() => {
        axios
            .get(CupboardDB_URL)
            .then(resp => setCupboardData(resp.data))
            .catch(err => console.log(err));
    }, []);

    const toggleEditItemModal = (e) => {
        const itemId = e.target.parentNode.parentNode.id;
        const item = cupboardData.filter(item => item.itemId === itemId)

        if (!formValid(inputValues)) {
            setInputValues({
                itemName : item[0].itemName,
                itemId : item[0].itemId,
                qtyAmount : item[0].qty.amount,
                qtyUnit : item[0].qty.unit,
                category: item[0].category
            })
        } else {
            clearInputValues();
        }
        setShowEditModal(!showEditModal);
    }

    const toggleAddItemModal = () => {
        clearInputValues();
        setShowAddModal(!showAddModal);
    }

    const handleFormChange =(e) => {
        const item = e.target;
        setInputValues({...inputValues, [item.name] : item.value})
    }

    const submitItem = (e) => {
        e.preventDefault();
        if (formValid(inputValues)) {
            const newItems = [createItem(inputValues)];
            axios
                .post(CupboardDB_URL, newItems)
                .then(resp => console.log(resp))
                .then(() => {
                    clearInputValues();
                    toggleAddItemModal();
                })
                .catch(err => console.log(err));
        }
    }

    const updateItem = (e) => {
        e.preventDefault();
        const itemId = e.target.id
        if (formValid(inputValues)) {
            const newItems = [createItem(inputValues)];
            axios
                .put(`${CupboardDB_URL}/${itemId}`, newItems)
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
        }
    }

    const clearInputValues = () => {
        setInputValues({
            itemName : '',
            itemId : null,
            qtyAmount : 0,
            qtyUnit : '',
            category: ''
        })
    }

    const deleteCupboardItem = (e) => {
        const itemId = e.target.parentNode.parentNode.id
        axios
            .delete(`${CupboardDB_URL}/${itemId}`)
            .then(resp => console.log(resp))
            // Send back updated cupboardItem Array and use this to setCupboardData so page updates
            .catch(err => console.log(err));
    }

    return (
        <main>
            {showAddModal && <AddCupboardItem submitItem={submitItem} handleFormChange={handleFormChange} toggleAddItemModal={toggleAddItemModal}/>}
            {showEditModal && <EditCupboardItem updateItem={updateItem} handleFormChange={handleFormChange} toggleEditItemModal={toggleEditItemModal} inputValues={inputValues}/>}
            <header className="cupboard__header">
                <GoBackIcon routerProps={routerProps} />
                <h1 className="cupboard__title">CUPBOARD</h1>
                <nav>
                    {/* Link to Cupboard */}
                    {/* Link to Object Detection */}
                </nav>
            </header>
            {false && <ObjectDetection />}
            <section>
                <ColumnHeader columnOne="ITEM" columnTwo="QTY" columnFour="ACTIONS"/>
                <ul>
                    {cupboardData.length === 0 ?
                        <li><p>Checking the contents of your Cupboard</p></li>:
                        cupboardData.map(item => {
                            return (
                                <CupboardItem
                                    key={item.itemId}
                                    item={item}
                                    toggleEditItemModal={toggleEditItemModal}
                                    deleteCupboardItem={deleteCupboardItem}
                                />
                            )
                        })
                    }
                </ul>
                <div>
                    <button type="button" onClick={toggleAddItemModal}>Add Item</button>
                </div>
            </section>
        </main>
    );
}

export default CupboardPage;