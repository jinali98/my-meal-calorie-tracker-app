import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CalorieCounterResult from "../../components/calorie-counter-results/calorie-counter-result";
import CustomTitle from "../../components/custom-title/custom-title.component";
import FindCalorieAmountForm from "../../components/find-calorie-amount-form/find-calorie-amount-form";
import CustomTable from "../../components/table/table.component";
import { tableCells } from "../../constants/tableCells";
import withSpinner from "../../hoc/withSpinner";
import {
  selectIsFetchingStarted,
  selectLoadingState,
} from "../../store/calorie-counter/calorie-counter.selectors";
import { useFindReceipeTitle } from "../find-receipe-page/find-receipe-form.styles";
import { CalorieCounterPageContainer } from "./find-calorie-amount.styles";

const DisplayCalorieDataWithSpinner = withSpinner(CalorieCounterResult);

const FindCalorieAmountPage = ({ isFetching, isStarted }) => {
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
      <DisplayCalorieDataWithSpinner
        isLoading={isFetching}
        isStartedFetching={isStarted}
      />
    </CalorieCounterPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectLoadingState,
  isStarted: selectIsFetchingStarted,
});

export default connect(mapStateToProps)(FindCalorieAmountPage);
