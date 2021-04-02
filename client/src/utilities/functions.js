export const createItem = (itemObj) => {
    // INPUT: obj, from user form submission
    // OUTPUT: obj, re-formats an item for adding to DB via POST/PUT request

    return {
        itemName : itemObj.itemName,
        itemId : itemObj.itemId || null,
        category : itemObj.category, 
        qtyAmount : itemObj.qtyAmount,
        qtyUnit : itemObj.qtyUnit
    }
} 
