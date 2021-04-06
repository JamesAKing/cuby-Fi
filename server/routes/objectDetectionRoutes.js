const express = require('express');
const fs = require('fs');
const router = express.Router();

// FUNCTIONS
const getData = (url) => {
    return JSON.parse(fs.readFileSync(url))
};

// VARIABLES
const modelURL = './object-detection/model.json';
const metadataURL = './object-detection/metadata.json';
const weightsURL = './object-detection/weights.bin';


router
    .route('/')
    .get((req, res) => {
        const modelObj = getData(modelURL);
        const metadataObj = getData(metadataURL)

        res.status(200).send([modelObj, metadataObj]);
    })



// EXPORTS
module.exports = router;