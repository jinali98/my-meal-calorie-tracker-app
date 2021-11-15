import React from "react";
import FindReceipeForm from "../../components/find-receipe-form/find-receipe-form.component";
import { ReceipePageContainer } from "./find-receipe-form.styles";
import ReceipeCardContainer from "../../components/receipe-cards-container/receipe-card-container.component.jsx";
import { FindReceipeTitle } from "../../components/titles/titles.component";
import { createStructuredSelector } from "reselect";
import {
  selectFetchedReceipes,
  selectFetchedStarted,
  selectLoadingStatus,
} from "../../store/receipes/receipes.selectors";
import { connect } from "react-redux";
import withSpinner from "../../hoc/withSpinner";
import EmptyMessage from "../../components/empty-message/empty-message.component";
const DisplayReceipesWithSpinner = withSpinner(ReceipeCardContainer);
const FindReceipePage = ({ isStarted, isFetching, recipeData }) => {
  return (
    <ReceipePageContainer>
      <FindReceipeTitle />
      <FindReceipeForm />
      <DisplayReceipesWithSpinner
        isLoading={isFetching}
        isStartedFetching={isStarted}
      />
      {!recipeData && (
        <EmptyMessage>You Haven't found any Receipes yet!</EmptyMessage>
      )}
    </ReceipePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectLoadingStatus,
  isStarted: selectFetchedStarted,
  recipeData: selectFetchedReceipes,
});

export default connect(mapStateToProps)(FindReceipePage);
