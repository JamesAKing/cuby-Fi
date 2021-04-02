import './ShoppingList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingListDB_URL, CupboardDB_URL } from '../utilities/APIEndPoints';
import { createItem } from '../utilities/functions';
import ColumnHeader from "../components/global/ColumnHeader";
import ShoppingListItem from "../components/shopping-list/ShoppingListItem";

function ShoppingListPage() {

    const [ shoppingListData, setShoppingListData ] = useState([]);

    useEffect(() => {
        axios
            .get(ShoppingListDB_URL)
            .then(resp => {
                setShoppingListData(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const itemInCart = (e) => {
        console.log('item addedd to cart');
    }

    const updateCupboard = (e) => {
        e.preventDefault();
        const addedItems = shoppingListData.filter(item => item.inCart)

        const formattedItems = addedItems.map(item => item = createItem(item))


        if (formattedItems.length > 0) {
            axios
                .post(CupboardDB_URL, formattedItems)
                .then(resp => console.log(resp))
                .catch(err =>  console.log(err));
        } else {
            console.log('No items to add to cupboard');
        }
    }


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
                            <ShoppingListItem
                                item={item}
                                itemInCart={itemInCart}
                            />
                        )
                    })
                }
            </ul>

            <button type="submit" onClick={updateCupboard}>ADD ITEMS TO CUPBOARD</button>
        </main>
    );
}

export default ShoppingListPage;