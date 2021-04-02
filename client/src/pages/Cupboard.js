import './Cupboard.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CupboardDB_URL } from '../utilities/APIEndPoints';
// import { cupboard } from '../utilities/URLs';
import EditCupboardItem from '../components/edit-cupboard-item/EditCupboardItem';
import CupboardItem from '../components/cupboard-item/CupboardItem';
// import ObjectDetection from "../components/coco-ssd/ObjectDetection";

function CupboardPage() {

    const [ cupboardData, setCupboardData ] = useState([]);
    const [ showEditModal, setShowEditModal ] = useState(true);

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

    // const editCupboardItem = (e) => {
    //     const itemId = e.target.parentNode.parentNode.id

    //     let selectedItem = cupboardData.filter(item => item.itemId === itemId)
    //     console.log(selectedItem);
    //     // setShowEditModal(true);
    // }

    const toggleEditItemModal = () => {
        // const itemId = e.target.parentNode.parentNode.id;
        setShowEditModal(!showEditModal);
    }

    const submitEdittedItem = (e) => {
        e.preventDefault();
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
            {showEditModal && <EditCupboardItem submitEdittedItem={submitEdittedItem} toggleEditItemModal={toggleEditItemModal}/>}
            <header className="cupboard__header">
                <h1 className="cupboard__title">CUPBOARD</h1>
            </header>
            <nav>
                {/* Link to Cupboard */}
                {/* Link to Object Detection */}
            </nav>
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
                    <button>Add Item</button>
                </div>
            </section>
        </main>
    );
}

export default CupboardPage;