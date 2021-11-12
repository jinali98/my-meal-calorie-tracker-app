import { calculateTotalCalories } from "../../utils/calculateTotalCalories";
import {
  countCaloriePercentage,
  mealReview,
} from "../../utils/countCalPercentage";

export const addMealCardsUtil = (list, newCard) => {
  const { date, mealType, carbo, fat, protein } = newCard;

  const totalCal = calculateTotalCalories(+carbo, +protein, +fat);
  const calPercentage = countCaloriePercentage(
    totalCal,
    +carbo,
    +fat,
    +protein
  );
  const mealReviews = mealReview(calPercentage);

  const {
    carboReview,
    fatReview,
    proteinReview,
    carboMood,
    fatMood,
    proteinMood,
  } = mealReviews;

  return [
    {
      id: `${date}${mealType}`,
      date,
      mealType,
      totalCal,
      nutrients: [
        {
          name: "Carbohydrate",
          grams: carbo,
          percentage: calPercentage[0].quantity,
          review: carboReview,
          mood: carboMood,
        },
        {
          name: "Protein",
          grams: protein,
          percentage: calPercentage[1].quantity,
          review: proteinReview,
          mood: proteinMood,
        },
        {
          name: "Fat",
          grams: fat,
          percentage: calPercentage[2].quantity,
          review: fatReview,
          mood: fatMood,
        },
      ],
    },
    ...list,
  ];
};
