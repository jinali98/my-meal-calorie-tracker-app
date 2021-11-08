import React from "react";
import CustomTitle from "../../components/custom-title/custom-title.component";
import FindReceipeForm from "../../components/find-receipe-form/find-receipe-form.component";
import {
  ReceipePageContainer,
  useFindReceipeTitle,
} from "./find-receipe-form.styles";

const FindReceipePage = () => {
  const classes = useFindReceipeTitle();
  return (
    <ReceipePageContainer>
      <CustomTitle
        className={classes.title}
        color="primary"
        align="center"
        variant="h6"
        component="h2"
        paragraph
      >
        Search for any receipe you like! we have hundreds of healthy receipes
        just for you. Select the meal type and search by receipe name and you
        are good to go!!!
      </CustomTitle>
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
