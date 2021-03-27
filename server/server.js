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


app.listen(port, () => {
    console.log(`Server Active, Port: ${port}`)
})