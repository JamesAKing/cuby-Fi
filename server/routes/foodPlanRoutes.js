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

const isNumber = str => {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
};

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
        res.status(200).json(result);
    })
    .post((req, res) => {
        const inCupboard = getData(cupboardURL);
        const inShoppingList = getData(shoppingListURL)
        const requiredIngredientsArr = req.body;

        let shoppingListItems = [];

        requiredIngredientsArr.forEach(ingredient => {
            const itemName = ingredient.itemName;
            let amount = ingredient.amount;
            const units = ingredient.units

            inCupboard.forEach(cupboardItem => {
                if (cupboardItem.itemName === itemName) {
                    amount -= cupboardItem.qty.amount
                }
            })
            
            // Create an array of items to add to shopping list
            shoppingListItems.push({
                itemName : itemName,
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
                    if (isNumber(item.qtyNeeded) && isNumber(newItem.qtyNeeded)) {
                        
                        item.qtyNeeded = (parseFloat(item.qtyNeeded) + parseFloat(newItem.qtyNeeded)).toString();

                        console.log(item.qtyNeeded);
                    }
                    uniqueItem = false;
                }        
            })
            if (uniqueItem) inShoppingList.push(newItem);
        })

        writeData(shoppingListURL, inShoppingList)
        res.status(200).json("Shopping List has been updated");
    })
    // Clear all meals for the week
    .delete((req, res) => {
        writeData(mealPlanURL, []);
        res.status(204).json('Removed all meals');
    })

router
    .route('/:day')
    // add meal on a specific day
    .post((req, res) => {
        const mealPlanData = getData(mealPlanURL);
        const selectedDay = req.params.day
        const selectedMealObj = req.body

        const newMealPlan = mealPlanData.map(meal => {
            if (meal.dayId == selectedDay) {
                return selectedMealObj;
            }
            return meal
        })

        writeData(mealPlanURL, newMealPlan)
        res.status(200).json(newMealPlan);
    })
    // Confirm this meal has been eaten
    .put((req, res) => {
        const mealPlanData = getData(mealPlanURL);
        const cupboardData = getData(cupboardURL);
        const selectedDay = req.params.day
        let selectedMealIngredients;

        mealPlanData.forEach(meal => {
            if (meal.dayId == selectedDay) {
                meal.recipeCooked = !meal.recipeCooked;
                selectedMealIngredients = meal.ingredients;
            }
        });
        
        selectedMealIngredients.forEach(mealIngredient => {
            cupboardData.forEach((cupboardItem, i) => {
                if (cupboardItem.itemName.toLowerCase() === mealIngredient.itemName.toLowerCase()) {
                    cupboardItem.qty.amount -= mealIngredient.amount
                }
            })
        })

        const updatedCupboardData = cupboardData.filter(item => {
            return item.qty.amount > 0
        })

        writeData(mealPlanURL, mealPlanData)
        writeData(cupboardURL, updatedCupboardData)

        res.status(200).json(mealPlanData);
    } )
    // remove recipe on a specific day.
    .delete((req, res) => {
        res.json("deleted");
    });

// EXPORTS
module.exports = router;