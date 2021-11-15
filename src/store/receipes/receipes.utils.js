export const formatReceipeData = (recipes) => {
  return recipes.map((recipe) => {
    const {
      label,
      calories,
      cuisineType,
      dietLabels,
      image,
      ingredientLines,
      totalNutrients,
      url,
    } = recipe.recipe;

    const updatedCalories = Math.round(calories);

    return {
      id: label,
      name: label,
      calories: updatedCalories,
      cuisineType,
      dietTypes: dietLabels,
      imageUrl: image,
      ingredientList: ingredientLines,
      totalNutrients,
      receipeUrl: url,
    };
  });
};
