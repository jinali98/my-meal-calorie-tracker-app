import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFetchedReceipes } from "../../store/receipes/receipes.selectors";
import RecipeCard from "../cards/receipe-card/recipe.component";
import { ReceipeContainer } from "./receipe-card-container.styles";
const ReceipeCardContainer = ({ receipes }) => {
  return (
    <ReceipeContainer>
      {receipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipeData={recipe} />
      ))}
    </ReceipeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  receipes: selectFetchedReceipes,
});

export default connect(mapStateToProps)(ReceipeCardContainer);
