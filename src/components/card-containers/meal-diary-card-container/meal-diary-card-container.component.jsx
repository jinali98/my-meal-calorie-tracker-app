import React from "react";
import MealDiaryCard from "../../cards/mealDiary-card/mealDiary-card.component";
import { Wrapper } from "./meal-diary-card-container.styles";

const MealDiaryCardContainer = () => {
  return (
    <Wrapper>
      <MealDiaryCard />
      <MealDiaryCard />
      <MealDiaryCard />
      <MealDiaryCard />
      <MealDiaryCard />
    </Wrapper>
  );
};

export default MealDiaryCardContainer;
