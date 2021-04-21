import { parse } from 'recipe-ingredient-parser-v2';
import { ingredientMeasures } from './data';

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
            "image" : recipeObj.strMealThumb,
            "ingredients" : getIngredients(recipeObj),
            "instructions" : recipeObj.strInstructions.split('.')
        };
}

export const getIngredients = (recipeObj) => {

    const ingredients = [];

    for (let i = 1; i <= 20; i++ ) {
        // parse through dynamic object keys.
        if (recipeObj[`strIngredient${i}`]) {
            const ingredientName = recipeObj[`strIngredient${i}`]
            const measure = recipeObj[`strMeasure${i}`]

            const ingredientString = `${measure} ${ingredientName}`;
            const parsedIngredientString = parse(ingredientString);

            let { ingredient, maxQty, unit } = parsedIngredientString; 

            if (!unit && maxQty) {
                const potentialUnit = ingredient.toLowerCase().split(' ')[0];

                ingredientMeasures.forEach(ingredientMeasure => {
                    if (potentialUnit === ingredientMeasure.toLowerCase()) {
                        unit = potentialUnit;
                        ingredient = ingredient.split(' ').slice(1).join(' ');
                    }
                })
            }

            if (maxQty === null) maxQty = "";
            if (unit === null) unit = "";

            ingredients.push({
                itemName : ingredient.trim().toLowerCase(),
                amount : maxQty,
                units : unit
            })
        }
    }

    return ingredients;
}

export const formValid = (formObj) => {
    let objKeys = Object.keys(formObj)
    
    for (let i = 0; i < objKeys.length; i++ ) {
        if (!formObj[objKeys[i]] && objKeys[i] !== 'itemId') {
            console.log('Error with ', objKeys[i])
            return false
        }
    }
    return true 
}