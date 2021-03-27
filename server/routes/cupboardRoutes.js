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
const cupboardURL = './data/cupboard.json';

// ROUTES

router
    .route('/')
    // see all items in the cupboard
    .get((req, res) => {
        const result = getData(cupboardURL);
        res.json(result);
    })

router
    .route('/:itemId')
    // check if specific item is in the cupboard
    .get((req, res) => {
        res.json("connected");
    })
    // Add an item(s) to the cupboard
    .post((req, res) => {
        res.json('added');
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