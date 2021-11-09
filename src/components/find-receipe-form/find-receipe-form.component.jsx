import React, { useState } from "react";
import {
  MealTypesForm,
  InputField,
} from "../input-fields/input-fields.component";

import SearchIcon from "@material-ui/icons/Search";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import { Form, useStylesForForm } from "./find-receipe-form.styles";

const FindReceipeForm = () => {
  const [inputValues, setInputvalues] = useState({
    receipeName: "",
    mealType: "",
  });

  const valueOnChangeHandler = (props) => (event) => {
    setInputvalues({ ...inputValues, [props]: event.target.value });
  };

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
    setInputvalues({
      receipeName: "",
      mealType: "",
    });
  };

  const classes = useStylesForForm();

  return (
    <Form onSubmit={formOnSubmitHandler}>
      <InputField
        autoFocus
        className={classes.searchField}
        id="receipe-search"
        type="text"
        label="Receipe Name"
        variant="outlined"
        color="secondary"
        value={inputValues.receipeName}
        onChange={valueOnChangeHandler("receipeName")}
      />
      <MealTypesForm
        className={classes.mealtypeField}
        id="meal-type"
        label="Meal type"
        variant="outlined"
        color="secondary"
        value={inputValues.mealType}
        onChange={valueOnChangeHandler("mealType")}
      />
      <CustomIconButton
        ariaLabel="search"
        color="secondary"
        variant="contained"
        type="submit"
      >
        <SearchIcon fontSize="large" />
      </CustomIconButton>
    </Form>
  );
};

export default FindReceipeForm;
