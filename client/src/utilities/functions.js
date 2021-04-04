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

export const createRecipeObj = recipeObj => {
    return {
            "recipeName" : recipeObj.strMeal, 
            "recipeId" : recipeObj.idMeal,
            "image" : "URL",
            "imageType" : "string",
            "ingredients" : getIngredients(recipeObj),
            "instructions" : recipeObj.strInstructions.split('.')
        };
}

export const getIngredients = (recipeObj) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++ ) {
        if (recipeObj[`strIngredient${i}`]) {
            const ingredient = recipeObj[`strIngredient${i}`]
            const measure = recipeObj[`strMeasure${i}`]

            const regexAmounts = /(\d*)(\D*)/;
            const parsedAmounts = measure.match(regexAmounts);

            let amount = parsedAmounts[1] || recipeObj[`strMeasure${i}`].split(' ')[0];
            const units = parsedAmounts[2] || "unit"
            if (units === amount) amount = null;

            ingredients.push({
                itemName : ingredient,
                amount : amount,
                units : units
            })
        }
    }

    return ingredients
}