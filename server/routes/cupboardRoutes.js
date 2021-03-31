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

// VARIABLES
const cupboardURL = './data/cupboard.json';

// ROUTES

router
    .route('/')
    // see all items in the cupboard
    .get((req, res) => {
        const result = getData(cupboardURL);
        res.json(result);
    })
    // Add an item(s) to the cupboard
    .post((req, res) => {
        let cupboardItems = getData(cupboardURL);
        const newItem = {
            "item" : req.body.item,
            "itemId" : uuidv4(),
            "category" : req.body.category,
            "qty" : req.body.qty
        }
        cupboardItems.push(newItem)
        // writeData(cupboardURL, cupboardItems)
        res.status(200).json(newItem);
    })

router
    .route('/:itemId')
    // check if specific item is in the cupboard
    .get((req, res) => {
        res.json("connected");
    })
    // Edit an item in the cupboard
    .put((erq, res) => {
        res.json('updated');
    })
    // Delete an item(s) from the cupboard
    .delete((req, res) => {
        res.json("deleted");
    })


// EXPORTS
module.exports = router;