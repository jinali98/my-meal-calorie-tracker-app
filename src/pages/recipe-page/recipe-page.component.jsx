import React from "react";
import { connect } from "react-redux";
import { selectSpecificRecipeCard } from "../../store/cook-book/cook-book.selectors";

const RecipePage = ({ match, recipe }) => {
  const {
    name,
    calories,
    cuisineType,
    dietTypes,
    imageUrl,
    ingredientList,
    totalNutrients,
    receipeUrl,
  } = recipe;
  return <div>this is the recipePage</div>;
};

const mapStateToProps = (state, ownProps) => ({
  recipe: selectSpecificRecipeCard(ownProps.match.params.recipeName)(state),
});

export default connect(mapStateToProps)(RecipePage);
