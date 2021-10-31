import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LinkItem,
  LinksContainer,
  LogoContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LinkItem to="/">MyMeal</LinkItem>
      </LogoContainer>
      <LinksContainer>
        <LinkItem to="/meal-diary">Meal Diary</LinkItem>
        <LinkItem to="/cook-book">Cook Book</LinkItem>
        <LinkItem to="/find-receipe">Healthy Receipes</LinkItem>
        <LinkItem to="/find-calorie-amount">Calorie counter</LinkItem>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
