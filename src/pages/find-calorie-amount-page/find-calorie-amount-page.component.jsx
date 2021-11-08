import React from "react";
import CustomTitle from "../../components/custom-title/custom-title.component";
import FindCalorieAmountForm from "../../components/find-calorie-amount-form/find-calorie-amount-form";
import { useFindReceipeTitle } from "../find-receipe-page/find-receipe-form.styles";
import { CalorieCounterPageContainer } from "./find-calorie-amount.styles";

const FindCalorieAmountPage = () => {
  const classes = useFindReceipeTitle();
  return (
    <CalorieCounterPageContainer>
      <CustomTitle
        className={classes.title}
        color="primary"
        align="center"
        variant="h6"
        component="h2"
        paragraph
      >
        Would you like to know the Nutrition content of what you eat? Give it a
        try! Give the food name and the Quantity to find out.
      </CustomTitle>
      <FindCalorieAmountForm />
    </CalorieCounterPageContainer>
  );
};

export default FindCalorieAmountPage;
