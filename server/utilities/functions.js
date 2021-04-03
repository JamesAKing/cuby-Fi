const { v4: uuidv4 } = require('uuid');

export const createShoppingListObj = itemObj => {
    // itemId = itemObj.itemId || uuidv4();

    console.log(itemObj);

    // return {
    //     "cartId" : uuidv4(),
    //     "itemName" : itemObj.itemName,
    //     "itemId" : itemId,
    //     "recipeName" : itemObj.recipeName, 
    //     "recipeId" : itemObj.recipeId,
    //     "category" : itemObj.category,
    //     "recipeQty" : itemObj.recipeAmount,
    //     "qtyNeeded" :aitemObj.mount,
    //     "qtyUnit" : itemObj.units,
    //     "inCart" : false
    // }
}