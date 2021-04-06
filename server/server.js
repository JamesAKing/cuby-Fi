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

// ROUTE IMPORTS
const cupboardRoutes = require('./routes/cupboardRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const foodPlanRoutes = require('./routes/foodPlanRoutes');
const objectDetectionRoutes = require('./routes/objectDetectionRoutes');


// INITIATED ROUTES
app.use('/cupboard', cupboardRoutes);
app.use('/shopping-list', shoppingListRoutes);
app.use('/recipes', recipeRoutes);
app.use('/meal-plan', foodPlanRoutes);
app.use('/object-detection', objectDetectionRoutes);


// 
app.listen(port, () => {
    console.log(`Server Active\nPort: ${port}`)
})