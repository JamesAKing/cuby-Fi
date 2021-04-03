import './ShoppingList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingListDB_URL, CupboardDB_URL } from '../utilities/APIEndPoints';
import { createItem } from '../utilities/functions';
import ColumnHeader from "../components/global/ColumnHeader";
import ShoppingListItem from "../components/shopping-list/ShoppingListItem";

function ShoppingListPage() {

    const [ shoppingListData, setShoppingListData ] = useState([]);
    const [ axiosGotData, setAxiosGotData ] = useState("Getting your shopping list...");

    useEffect(() => {
        axios
            .get(ShoppingListDB_URL)
            .then(resp => {
                setShoppingListData(resp.data);
            })
            .then(() => setAxiosGotData("Your shopping list is empty"))
            .catch(err => {
                console.log(err);
            });
    }, []);

    const addTocart = (e) => {
        const itemId = e.target.id;
        const updatedShoppingList = shoppingListData.map(item => {
            // console.log(item.cartId === itemId);
            if (item.cartId === itemId) {
                item.inCart = true;
            };
            return item;
        }) ;
        setShoppingListData(updatedShoppingList);
    }

    const updateCupboardAndShopList = (e) => {
        e.preventDefault();
        const addedItems = shoppingListData.filter(item => item.inCart)
        const formattedItems = addedItems.map(item => item = createItem(item))

        if (formattedItems.length > 0) {
            axios
                .post(CupboardDB_URL, formattedItems)
                .then(resp => console.log(resp))
                .catch(err =>  console.log(err));
            
            axios
                .delete(ShoppingListDB_URL, { data : addedItems})
                .then(resp => console.log(resp))
                .catch(err =>  console.log(err));
            
            setShoppingListData(shoppingListData.filter(item => {
                return !item.inCart;
            }));

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
                    <p>{axiosGotData}</p>:
                    shoppingListData.map(item => {
                        return(
                            <ShoppingListItem
                                key={item.cartId}
                                item={item}
                                addTocart={addTocart}
                            />
                        )
                    })
                }
            </ul>
            <button type="submit" onClick={updateCupboardAndShopList}>ADD ITEMS TO CUPBOARD</button>
        </main>
    );
}

export default ShoppingListPage;