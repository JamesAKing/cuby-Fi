const { v4: uuidv4 } = require('uuid');

export const formatShoppingListObj = itemObj => {
    itemId = itemObj.itemId || uuidv4();

    return {
        "cartId" : uuidv4(),
        "itemName" : itemObj.itemName,
        "itemId" : itemId,
        // "category" : itemObj.category,
        "qtyNeeded" : itemObj.amount,
        "qtyUnit" : itemObj.units,
        "inCart" : false
    }
}

export const createRecipe = recipeObj => {

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