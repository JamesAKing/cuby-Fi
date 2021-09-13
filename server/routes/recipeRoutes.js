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

const createRecipe = recipeObj => {

    const recipeIngredientsArr = recipeObj.ingredients.map(ingredient => {
        return {
            "itemName" : ingredient.itemName,
            "amount" : ingredient.amount,
            "units" : ingredient.unit
        };
    });

    const instructionsArr = recipeObj.instructions.map(instruction => instruction);

    return {
        "recipeName" : recipeName, 
        "recipeId" : uuidv4(),
        "image" : imageURL,
        "imageType" : imageType,
        "ingredients" : recipeIngredientsArr,
        "instructions" : instructionsArr
    }
}

// VARIABLES
const recipesURL = './data/recipes.json';

// ROUTES
router
    .route('/')
    // see all recipes
    .get((req, res) => {
        const result = getData(recipesURL);
        res.status(200).json(result);
    })
    // Add a recipe to recipe Book
    .post((req, res) => {
        const recipeData = getData(recipesURL);
        const recipeId = uuidv4();
        const { recipeName, image, ingredients, instructions } = req.body;

        for (let i = 0; i < recipeData.length; i++) {
            if (recipeData[i].recipeName.toLowerCase() === recipeName.toLowerCase()) {
                return res.status(409).json('Recipe Already Exists');
            }
        }
        
        const newRecipe = {
            "recipeName" : recipeName, 
            "recipeId" : recipeId,
            "image" : image,
            "ingredients" : ingredients,
            "instructions" : instructions,
        }

        recipeData.push(newRecipe);
        writeData(recipesURL, recipeData);

        res.status(200).json(newRecipe);
    })

router
    // Specific/detailed view of Recipes will use recipesDetailed.json
    .route('/:recipeId')
    // get a specific recipe
    .get((req, res) => {
        const recipeData = getData(recipesURL);
        const { recipeId } = req.params;

        const singleRecipe = recipeData.filter(recipe => recipe.recipeId === recipeId);

        if (singleRecipe.length !== 1) return res.status(404).json("no recipe with that id found");
        
        res.status(200).json(singleRecipe.pop());
    })
    // Edit a recipe
    .put((req, res) => {
        res.json('updated');
    })
    // Delete a recipe
    .delete((req, res) => {
        res.json("deleted");
    })

// EXPORTS
module.exports = router;