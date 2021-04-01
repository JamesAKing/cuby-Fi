import './Cupboard.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CupboardDB_URL } from '../utilities/APIEndPoints';
// import { cupboard } from '../utilities/URLs';
// import ObjectDetection from "../components/coco-ssd/ObjectDetection";

function CupboardPage() {

    const [ cupboardData, setCupboardData ] = useState([]);

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

    const editCupboardItem = (e) => {
        console.log(e.target.parentNode.parentNode.id)
        // This is either a link or a modal
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
                                <li key={item.itemId} id={item.itemId}>
                                    <p>{item.item}</p>
                                    <div>
                                        <button type="button" onClick={editCupboardItem}>EDIT</button>
                                        <button type="button" onClick={deleteCupboardItem}>DELETE</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    );
}

export default CupboardPage;