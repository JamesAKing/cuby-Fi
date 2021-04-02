import './Cupboard.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CupboardDB_URL } from '../utilities/APIEndPoints';
// import { cupboard } from '../utilities/URLs';
import AddCupboardItem from '../components/add-cupboard-item/AddCupboardItem';
import EditCupboardItem from '../components/edit-cupboard-item/EditCupboardItem';
import CupboardItem from '../components/cupboard-item/CupboardItem';
// import ObjectDetection from "../components/coco-ssd/ObjectDetection";

function CupboardPage() {

    const [ cupboardData, setCupboardData ] = useState([]);
    const [ showEditModal, setShowEditModal ] = useState(false);
    const [ showAddModal, setShowAddModal ] = useState(false);


    useEffect(() => {
        axios
            .get(CupboardDB_URL)
            .then(resp => {
                setCupboardData(resp.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const toggleEditItemModal = () => {
        // const itemId = e.target.parentNode.parentNode.id;
        setShowEditModal(!showEditModal);
    }

    const toggleAddItemModal = () => {
        // const itemId = e.target.parentNode.parentNode.id;
        console.log('click')
        setShowAddModal(!showAddModal);
    }

    const submitItem = (e) => {
        e.preventDefault();
        console.log('added')
        const updatedItem = e.target;
        console.log(updatedItem);
    }

    const deleteCupboardItem = (e) => {
        const itemId = e.target.parentNode.parentNode.id
        axios
            .delete(`${CupboardDB_URL}/${itemId}`)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }

    return (
        <main>
            {showAddModal && <AddCupboardItem submitItem={submitItem} toggleAddItemModal={toggleAddItemModal}/>}
            {showEditModal && <EditCupboardItem submitItem={submitItem} toggleEditItemModal={toggleEditItemModal}/>}
            <header className="cupboard__header">
                <h1 className="cupboard__title">CUPBOARD</h1>
                <nav>
                    {/* Link to Cupboard */}
                    {/* Link to Object Detection */}
                </nav>
            </header>
            <section>
                <ul>
                    {cupboardData.length === 0 ?
                        <li><p>Checking the contents of your Cupboard</p></li>:
                        cupboardData.map(item => {
                            return (
                                <CupboardItem 
                                    itemId={item.itemId}
                                    itemName={item.item}
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