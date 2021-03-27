const express = require('express');
const fs = require('fs');
const router = express.Router();

// Consider condensing deatiled and quick view JSON

// FUNCTIONS
const getData = (url) => {
    return JSON.parse(fs.readFileSync(url))
};

const writeData = (url, data) => {
    fs.writeFileSync(url, JSON.stringify(data));
};

// VARIABLES
const scheduleURL = './data/schedule.json';

// ROUTES

router
    .route('/')
    // get meal plan for the week
    .get((req, res) => {
        const result = getData(scheduleURL);
        res.json(result);
    })
    // Clear all meals for the week
    .delete((req, res) => {
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