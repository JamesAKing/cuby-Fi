const express = require('express');
const cors = require('cors');
require('dotenv').config();

// DECLARATIONS
const app = (express());
app.use(cors());
app.use(express.json());
// app.use("/static", express.static("public"));

// Variables
const port = process.env.PORT || 8080;
const cupboardURL = './data/cupboard.json';
const recipesURL = './data/recipes.json';
const recipesDetailedURL = './data/recipesDetailed.json';
const scheduleURL = './data/schedule.json';
const shoppingListURL = './data/shoppingList.json';


// ROUTE IMPORTS
const cupboarRoutes = require('./routes/cupboardRoutes.js');
app.use('/cupboard', cupboarRoutes);


app.listen(port, () => {
    console.log(`Server Active\nPort: ${port}`)
})