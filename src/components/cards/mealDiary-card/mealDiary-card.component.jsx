import { CardActions, CardContent } from "@material-ui/core";
import React from "react";
import { DeleteButton, UpdateButton } from "../../buttons/buttons.component";
import CustomCard from "../../custom-card/custom.card.component";
import CustomTitle from "../../custom-title/custom-title.component";
import {
  HeaderWrapper,
  QuantityWrapper,
  ResultWrapper,
  useStyles,
} from "./mealDiary-card.styles";

const MealDiaryCard = () => {
  const classess = useStyles();
  return (
    <CustomCard>
      <CardContent>
        <HeaderWrapper>
          <CustomTitle color="primary" variant="h6">
            01/02/2021
          </CustomTitle>
          <CustomTitle color="primary" variant="h6">
            BREAKFAST
          </CustomTitle>
        </HeaderWrapper>
        <QuantityWrapper>
          <CustomTitle variant="subtitle1">Carbohydrate : 10g </CustomTitle>
          <CustomTitle variant="subtitle1">Protein : 10g</CustomTitle>
          <CustomTitle variant="subtitle1">Fat : 10g</CustomTitle>
        </QuantityWrapper>
        <ResultWrapper>
          <CustomTitle variant="subtitle1">
            Total Calorie Intake is 10kcl
          </CustomTitle>
          <CustomTitle variant="subtitle1">meal is Balanced</CustomTitle>
        </ResultWrapper>
      </CardContent>
      <CardActions>
        <UpdateButton />
        <DeleteButton />
      </CardActions>
    </CustomCard>
  );
};

export default MealDiaryCard;
//protein amount is low.
