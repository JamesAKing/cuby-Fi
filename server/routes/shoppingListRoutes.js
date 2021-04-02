const express = require('express');
const fs = require('fs');
const router = express.Router();

// FUNCTIONS
const getData = (url) => {
    return JSON.parse(fs.readFileSync(url))
};

const writeData = (url, data) => {
    fs.writeFileSync(url, JSON.stringify(data));
};

const createShoppingListItem = (req) => {
    const { item, itemId, recipeFor, recipeId, category, recipeQty, qtyNeeded } = req.body;

        return {
            "item" : item,
            "itemId" : itemId,
            "recipeFor" : recipeFor,
            "recipeId" : recipeId,
            "category" : category,
            "recipeQty" : recipeQty,
            "qtyNeeded" : qtyNeeded,
            "inCart" : false
        }
}

// VARIABLES
const shoppingListURL = './data/shoppingList.json';

// ROUTES

router
    .route('/')
    // see all items in the shoppingList
    .get((req, res) => {
        const result = getData(shoppingListURL);
        res.json(result);
    })
    // Add/Remove an item(s) to/from the shoppingList
    .post((req, res) => {
        let shoppingListData = getData(shoppingListURL);
        const newListItem = createShoppingListItem(req);
        shoppingListData.push(newListItem);
        // writeData(shoppingListURL, shoppingListData);

        res.status(200).json(newListItem);
    })
    .delete((req, res) => {
        const shoppingListData = getData(shoppingListURL);
        const addedItems = req.body;
        let updatedShoppingList = []

        addedItems.forEach(addedItem => {
            shoppingListData.forEach(shoppingListItem => {
                if (addedItem.itemName !== shoppingListItem.itemName) {
                    updatedShoppingList.push(shoppingListItem)
                }
            })
        });

        // writeData(shoppingListURL, updatedShoppingList);
        updatedShoppingList.length < shoppingListData.length ?
            res.status(204).send():
            res.status(400).json('No items removd from shopping list');
    })

router
    .route('/:itemId')
    // check if specific item is in the shoppingList
    .get((req, res) => {
        const shoppingListData = getData(shoppingListURL);
        const { itemId } = req.params;

        const result =shoppingListData.filter(item => {
            return itemId === item.itemId;
        });

        if (result.length > 0) res.status(200).json(result);
        else res.status(404).json('Cannot find item.');
    })
    // Edit an item in the shoppingList
    .put((req, res) => {
        let shoppingListData = getData(shoppingListURL);
        const { itemId } = req.params;

        // Ensure itemId is not modified during edit

        let newListItem = createShoppingListItem(req)
        let newShoppingList = shoppingListData.map(item => {
            return itemId === item.itemId ? newListItem : item
        })
        // writeData(shoppingListUrl, newShoppingList);
        res.status(200).json(`item with ID ${itemId} updated`);
    })
    // Delete an item(s) from the shoppingList
    .delete((req, res) => {
        let shoppingListData = getData(shoppingListURL);
        const { itemId } = req.params;

        const newShoppingList = shoppingListData.filter(item => {
            return itemId !== item.itemId;
        });
        
        if (newShoppingList.length === (shoppingListData.length - 1)) {
            // writeData(shoppingListURL, newShoppingList);
            res.status(204).json()
        } else res.status(404).json("No Item Found");
    })

// EXPORTS
module.exports = router;