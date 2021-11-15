import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCookBookList } from "../../../store/cook-book/cook-book.selectors";
import RecipeCard from "../../cards/receipe-card/recipe.component";
import EmptyMessage from "../../empty-message/empty-message.component";
const CookBookCardContainer = ({ mealCards }) => {
  console.log(mealCards);
  return (
    <div>
      {mealCards?.map((card) => (
        <RecipeCard key={card.id} recipeData={card} />
      ))}

      <div>
        {mealCards.length === 0 && (
          <EmptyMessage>
            You Haven't added any Favourite recipes yet!
          </EmptyMessage>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mealCards: selectCookBookList,
});

export default connect(mapStateToProps)(CookBookCardContainer);
