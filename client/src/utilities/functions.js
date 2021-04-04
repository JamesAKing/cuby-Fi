export const createItem = itemObj => {
    // INPUT: obj, from user form submission
    // OUTPUT: obj, re-formats an item for adding to DB via POST/PUT request
    return {
        itemName : itemObj.itemName,
        itemId : itemObj.itemId || null,
        category : itemObj.category, 
        qtyAmount : itemObj.qtyAmount || itemObj.qtyNeeded,
        qtyUnit : itemObj.qtyUnit
    }
} 

export const formatMealPlanObj = (recipe, dayId) => {
    // INPUT: obj (recipe), users chosen recipe
    //        integer (dayId), the users chosen day for the meal
    // OUTPUT: obj, re-fomrats input to matchdata stored in mealPlan.json  

    return {
        "dayId" : dayId,
        "recipeCooked" : false,
        "recipeName" : recipe.recipeName, 
        "recipeId" : recipe.recipeId,
        "image" : recipe.image,
        "imageType" : recipe.imageType,
        "ingredients" : recipe.ingredients,
        "instructions" : recipe.instructions
    }
}