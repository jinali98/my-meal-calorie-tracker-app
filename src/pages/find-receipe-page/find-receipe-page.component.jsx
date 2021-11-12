import React from "react";
import FindReceipeForm from "../../components/find-receipe-form/find-receipe-form.component";
import { ReceipePageContainer } from "./find-receipe-form.styles";
import ReceipeCardContainer from "../../components/receipe-cards-container/receipe-card-container.component.jsx";
import { FindReceipeTitle } from "../../components/titles/titles.component";
const FindReceipePage = () => {
  return (
    <ReceipePageContainer>
      <FindReceipeTitle />
      <FindReceipeForm />
      <ReceipeCardContainer />
    </ReceipePageContainer>
  );
};

export default FindReceipePage;
