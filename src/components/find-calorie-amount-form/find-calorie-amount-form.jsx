import React, { useState } from "react";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";

import { SearchForm } from "../input-fields/input-fields.component";
import SearchIcon from "@material-ui/icons/Search";
import {
  CalorieCOunterForm,
  useStylesForCalorieCounterForm,
} from "./find-calorie-amount-form.styles";
import { InputAdornment } from "@material-ui/core";

const FindCalorieAmountForm = () => {
  const [inputValues, setInputvalues] = useState({
    foodName: "",
    amount: "1",
  });

  const valueOnChangeHandler = (props) => (event) => {
    setInputvalues({ ...inputValues, [props]: event.target.value });
  };

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
    setInputvalues({
      foodName: "",
      amount: "1",
    });
  };
  const classes = useStylesForCalorieCounterForm();

  return (
    <CalorieCOunterForm onSubmit={formOnSubmitHandler}>
      <SearchForm
        autoFocus
        className={classes.searchField}
        id="receipe-search"
        type="text"
        label="Food Name"
        variant="outlined"
        color="secondary"
        value={inputValues.foodName}
        onChange={valueOnChangeHandler("foodName")}
      />
      <SearchForm
        className={classes.amountField}
        id="quantity"
        type="number"
        label="Quantity"
        variant="outlined"
        color="secondary"
        value={inputValues.amount}
        onChange={valueOnChangeHandler("amount")}
        InputProps={
          ({ inputProps: { min: 1 } },
          {
            endAdornment: <InputAdornment position="end">g</InputAdornment>,
          })
        }
      />
      <CustomIconButton
        ariaLabel="search"
        color="secondary"
        variant="contained"
        type="submit"
      >
        <SearchIcon fontSize="large" />
      </CustomIconButton>
    </CalorieCOunterForm>
  );
};

export default FindCalorieAmountForm;
