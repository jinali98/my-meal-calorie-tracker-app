import React from "react";
import FindReceipeForm from "../../components/find-receipe-form/find-receipe-form.component";
import { ReceipePageContainer } from "./find-receipe-form.styles";

const FindReceipePage = () => {
  return (
    <ReceipePageContainer>
      <FindReceipeForm />

      <div>
        <img src="" alt="" />
        <p>receipe.label</p>
        <p>calories</p>
        <p>total weight</p>
      </div>
    </ReceipePageContainer>
  );
};

export default FindReceipePage;
