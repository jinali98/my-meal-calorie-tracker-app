import React from "react";
import DiaryModalContainer from "../../components/diary-modal-container/diary-modal-container";
import { MealDiaryPageContainer } from "./meal-diary-page.styles";
const MealDiaryPage = () => {
  return (
    <MealDiaryPageContainer>
      <DiaryModalContainer />

      <div>cards</div>
    </MealDiaryPageContainer>
  );
};

export default MealDiaryPage;
