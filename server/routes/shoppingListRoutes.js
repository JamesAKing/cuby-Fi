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
    // Add an item(s) to the shoppingList
    .post((req, res) => {
        res.json('added');
    })

router
    .route('/:itemId')
    // check if specific item is in the shoppingList
    .get((req, res) => {
        res.json("connected");
    })
    // Edit an item in the shoppingList
    .put((erq, res) => {
        res.json('updated');
    })
    // Delete an item(s) from the shoppingList
    .delete((req, res) => {
        res.json("deleted");
    })


// EXPORTS
module.exports = router;