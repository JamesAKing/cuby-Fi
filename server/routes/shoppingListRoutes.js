const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

const createCupboardItem = (item) => {
    return ({
        "itemName" : item.itemName,
        "itemId" : item.itemId || uuidv4(),
        "category" : item.category || null,
        "qty" : {"amount" : item.qtyNeeded, "unit" : item.qtyUnit}
    })
}

// VARIABLES
const shoppingListURL = './data/shoppingList.json';
const cupboardURL = './data/cupboard.json';

// ROUTES
router
    .route('/')
    // see all items in the shoppingList
    .get((req, res) => {
        const result = getData(shoppingListURL);
        console.log(result);
        res.status(200).json(result);
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
        const cupboardData = getData(cupboardURL)
        const addedItems = req.body;

        // REFACTOR THIS FUNCTION
        while (addedItems.length > 0) {
            const addedItem = addedItems.pop();
            let itemAdded = false
            shoppingListData.forEach((shoppingListItem, i) => {
                if (shoppingListItem.itemName.toLowerCase() === addedItem.itemName.toLowerCase()) {
                    shoppingListData.splice(i, 1)
                    cupboardData.forEach(cupboardItem => {
                        if (addedItem.itemName.toLowerCase() === cupboardItem.itemName.toLowerCase()) {
                            cupboardItem.qty.amount += addedItem.qtyNeeded;
                            itemAdded = true;                            
                        }
                    })
                }
            }) 

            if (!itemAdded) {
                cupboardData.push(createCupboardItem(addedItem))
                itemAdded = true;
            };
        }

        writeData(cupboardURL, cupboardData);
        writeData(shoppingListURL, shoppingListData);
        res.status(204).send();
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