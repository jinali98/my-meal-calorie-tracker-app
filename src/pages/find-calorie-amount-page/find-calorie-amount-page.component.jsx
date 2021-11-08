import React from "react";
import FindCalorieAmountForm from "../../components/find-calorie-amount-form/find-calorie-amount-form";
import { CalorieCounterPageContainer } from "./find-calorie-amount.styles";

const FindCalorieAmountPage = () => {
  return (
    <CalorieCounterPageContainer>
      <FindCalorieAmountForm />
    </CalorieCounterPageContainer>
  );
};

export default FindCalorieAmountPage;
