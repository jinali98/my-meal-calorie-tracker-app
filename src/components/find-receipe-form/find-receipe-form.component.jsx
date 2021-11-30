import React from "react";
import {
  MealTypesForm,
  InputField,
} from "../input-fields/input-fields.component";

import SearchIcon from "@material-ui/icons/Search";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";
import { Form, useStylesForForm } from "./find-receipe-form.styles";
import useTextFieldValidate from "../../effects/useTextFieldValidate";
import { startFetchingReceipesAsync } from "../../store/receipes/receipes.actions";
import { connect } from "react-redux";

const FindReceipeForm = ({ requestReceipes }) => {
  const {
    value: receipeName,
    reset: receipeNameReset,
    hasError: receipeNameHasError,
    valueChangeHandler: receipeNameChangeHandler,
    isValid: receipeNameIsValid,
    onBlur: receipeNameBlurHandler,
  } = useTextFieldValidate();

  const {
    value: mealType,
    reset: mealTypeReset,
    hasError: mealTypeHasError,
    valueChangeHandler: mealTypeChangeHandler,
    isValid: mealTypeIsValid,
    onBlur: mealTypeBlurHandler,
  } = useTextFieldValidate();

  const formOnSubmitHandler = (e) => {
    e.preventDefault();

    if (!receipeNameIsValid || !mealTypeIsValid) return;

    requestReceipes(mealType, receipeName);

    mealTypeReset();
    receipeNameReset();
  };

  const classes = useStylesForForm();

  return (
    <Form onSubmit={formOnSubmitHandler}>
      <InputField
        className={classes.searchField}
        id="receipe-search"
        type="text"
        label="Receipe Name"
        color="secondary"
        value={receipeName}
        onChange={receipeNameChangeHandler}
        error={receipeNameHasError}
        onBlur={receipeNameBlurHandler}
      />
      <MealTypesForm
        className={classes.mealtypeField}
        id="meal-type"
        label="Meal type"
        color="secondary"
        value={mealType}
        onChange={mealTypeChangeHandler}
        error={mealTypeHasError}
        onBlur={mealTypeBlurHandler}
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

const mapDispatchToProps = (dispatch) => ({
  requestReceipes: (mealType, receipeName) =>
    dispatch(startFetchingReceipesAsync({ mealType, receipeName })),
});

export default connect(null, mapDispatchToProps)(FindReceipeForm);
