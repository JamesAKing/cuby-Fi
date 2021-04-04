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

const formatShoppingListObj = itemObj => {
    itemId = itemObj.itemId || uuidv4();

    return {
        "cartId" : uuidv4(),
        "itemName" : itemObj.itemName,
        "itemId" : itemId,
        // "category" : itemObj.category,
        "qtyNeeded" : itemObj.amount,
        "qtyUnit" : itemObj.units,
        "inCart" : false
    }
}

// VARIABLES
const mealPlanURL = './data/mealPlan.json';
const cupboardURL = './data/cupboard.json';
const shoppingListURL = './data/shoppingList.json';


// ROUTES

router
    .route('/')
    // get meal plan for the week
    .get((req, res) => {
        const result = getData(mealPlanURL);
        res.json(result);
    })
    .post((req, res) => {
        const inCupboard = getData(cupboardURL);
        const inShoppingList = getData(shoppingListURL)
        const requiredIngredientsObj = req.body
        const requiredIngredientsKeys = Object.keys(requiredIngredientsObj);

        let shoppingListItems = [];

        requiredIngredientsKeys.forEach(itemName => {
            const item = itemName;
            let amount = requiredIngredientsObj[itemName].amount;
            const units = requiredIngredientsObj[itemName].units

            inCupboard.forEach(cupboardItem => {
                if (cupboardItem.itemName === itemName) {
                    amount -= cupboardItem.qty.amount
                }
            })
            
            // Create an array of items to add to shopping list
            shoppingListItems.push({
                itemName : item,
                amount : amount,
                units : units
            })
        })

        // Convert data to shoppinglist DB format
        const formattedShoppingList = shoppingListItems.map(item => {
            return formatShoppingListObj(item);
        })

        // Update Shopping list
        formattedShoppingList.forEach(newItem => {
            let uniqueItem = true;

            inShoppingList.forEach(item => {
                if( item.itemName.toLowerCase() === newItem.itemName.toLowerCase()) {
                    item.qtyNeeded += newItem.qtyNeeded
                    uniqueItem = false;
                }        
            })

            if (uniqueItem) inShoppingList.push(newItem);

        })

        // writeData(shoppingListURL, inShoppingList)
        res.status(200).json("Shopping List has been updated");
    })
    // Clear all meals for the week
    .delete((req, res) => {
        // writeData(mealPlanURL, []);
        res.json('Removed all meals');
    })

router
    .route('/:day')
    // get meal for a specific day
    .get((req, res) => {
        console.log(req.params.day);
        res.json("today we are eating");
    })
    // add meal on a specific day
    .post((req, res) => {
        console.log(req.params.day);
        res.json('added meal on this day');
    })
    // Confirm this meal has been eaten
    .put((req, res) => {
        console.log(req.params.day);
        res.json("meal eaten");
    } )
    // remove recipe on a specific day.
    .delete((req, res) => {
        console.log(req.params.day);
        res.json("deleted");
    });


// EXPORTS
module.exports = router;