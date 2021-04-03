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