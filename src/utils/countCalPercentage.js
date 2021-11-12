import { calorieContent } from "../constants/calorieContent";

export const countCaloriePercentage = (
  totalCal,
  carboAmount,
  fatAmount,
  proteinAmount
) => {
  const { carbo, protein, fat } = calorieContent;
  const carboPercentage = Math.round(
    ((carbo.cal * carboAmount) / totalCal) * 100
  );
  const proteinPercentage = Math.round(
    ((protein.cal * proteinAmount) / totalCal) * 100
  );
  const fatPercentage = Math.round(((fat.cal * fatAmount) / totalCal) * 100);

  return [
    { name: "carbo", quantity: carboPercentage },
    { name: "protein", quantity: proteinPercentage },
    { name: "fat", quantity: fatPercentage },
  ];
};

export const mealReview = (nutrients) => {
  const { carbo, protein, fat } = calorieContent;
  let carboReview;
  let fatReview;
  let proteinReview;

  nutrients.forEach((item) => {
    if (item.name === "carbo") {
      if (item.quantity >= carbo.min && item.quantity <= carbo.max) {
        carboReview = "Carbohydrate amount is balanced";
      }
      if (item.quantity < carbo.min) {
        carboReview = "Carbohydrate amount is low";
      }
      if (item.quantity > carbo.max) {
        carboReview = "Carbohydrate amount is high";
      }
    }
    if (item.name === "protein") {
      if (item.quantity >= protein.min && item.quantity <= protein.max) {
        fatReview = "Protein amount is balanced";
      }
      if (item.quantity < protein.min) {
        fatReview = "Protein amount is low";
      }
      if (item.quantity > protein.max) {
        fatReview = "Protein amount is high";
      }
    }
    if (item.name === "fat") {
      if (item.quantity >= fat.min && item.quantity <= fat.max) {
        proteinReview = "Fat amount is balanced";
      }
      if (item.quantity < fat.min) {
        proteinReview = "Fat amount is low";
      }
      if (item.quantity > fat.max) {
        proteinReview = "Fat amount is high";
      }
    }
  });

  return { carboReview, fatReview, proteinReview };
};
