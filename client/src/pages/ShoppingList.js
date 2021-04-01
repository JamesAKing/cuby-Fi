import './ShoppingList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingListDB_URL } from '../utilities/APIEndPoints';
import ColumnHeader from "../components/global/ColumnHeader";
import ShoppingListItem from "../components/shopping-list/ShoppingListItem";

function ShoppingListPage() {

    const [ shoppingListData, setShoppingListData ] = useState([]);

    useEffect(() => {
        axios
            .get(ShoppingListDB_URL)
            .then(resp => {
                console.log("Shopping List: ", resp.data);
                setShoppingListData(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <main className="shopping-list">
            <header className="shopping-list__header">
                <h1 className="shopping-list__title">SHOPPING LIST</h1>
            </header>
            <ColumnHeader
                columnOne ="ITEM"
                columnTwo ="QTY"
                columnThree ="RECIPE"
                columnFour ="ACTIONS"
            />
            <ul className="shopping-list__items">
                {shoppingListData.length === 0 ?
                    <p>Loading your Shopping List</p>:
                    shoppingListData.map(item => {
                        return(
                            <ShoppingListItem />
                        )
                    })
                }
            </ul>
        </main>
    );
}

export default ShoppingListPage;