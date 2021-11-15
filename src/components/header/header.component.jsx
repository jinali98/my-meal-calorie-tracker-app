import { Badge } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCookBookCount } from "../../store/cook-book/cook-book.selectors";
import { selectMealCardCount } from "../../store/meal-diary/mealdiary.selectors";

import {
  HeaderContainer,
  LinkItem,
  LinksContainer,
  LogoContainer,
} from "./header.styles";

const Header = ({ mealCardCount, cookBookCount }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LinkItem to="/">MyMeal</LinkItem>
      </LogoContainer>
      <LinksContainer>
        <Badge badgeContent={mealCardCount} color="secondary" showZero>
          <LinkItem to="/meal-diary">Meal Diary</LinkItem>
        </Badge>
        <Badge badgeContent={cookBookCount} color="secondary" showZero>
          <LinkItem to="/cook-book">Cook Book</LinkItem>
        </Badge>

        <LinkItem to="/find-receipe">Healthy Recipes</LinkItem>
        <LinkItem to="/find-calorie-amount">Calorie counter</LinkItem>
      </LinksContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  mealCardCount: selectMealCardCount,
  cookBookCount: selectCookBookCount,
});

export default connect(mapStateToProps)(Header);
