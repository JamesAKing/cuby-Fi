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
        let newItems = req.body.newItems;
        
        const convertednewItems = newItems.map(item => {
            return ({
                "item" : item.itemName,
                // "itemId" : uuidv4(),
                "itemId" : "5",
                "category" : item.category,
                "qty" : item.qtyNeeded
            })
        });

        convertednewItems.forEach(item => {
            cupboardItems.push(item)
        })
        console.log(cupboardItems)
        // writeData(cupboardURL, cupboardItems)
        res.status(204).json();
    })

router
    .route('/:itemId')
    // check if specific item is in the cupboard
    .get((req, res) => {
        res.json("connected");
    })
    // Edit an item in the cupboard
    .put((req, res) => {
        res.json('updated');
    })
    // Delete an item(s) from the cupboard
    .delete((req, res) => {
        const cupboardData = getData(cupboardURL);
        const itemId = req.params.itemId;
        const updatedCupboardData = cupboardData.filter(item => item.itemId !== itemId);

        if (updatedCupboardData.length === (cupboardData.length - 1)) {
            // writeData(cupboardURL, updatedCupboardData);
            return res.status(204).send('deleted');
        }

        res.status(404).json('Item not found');
    })


// EXPORTS
module.exports = router;