import React, { useState } from "react";
import CustomIconButton from "../custom-icon-button/custom-icon-button.component";

import { InputField } from "../input-fields/input-fields.component";
import SearchIcon from "@material-ui/icons/Search";
import {
  CalorieCOunterForm,
  useStylesForCalorieCounterForm,
} from "./find-calorie-amount-form.styles";
import { InputAdornment } from "@material-ui/core";
import { fetchCalorieDataAsync } from "../../store/calorie-counter/calorie-counter.actions";
import { connect } from "react-redux";

const FindCalorieAmountForm = ({ fetchCalorieData }) => {
  const [inputValues, setInputvalues] = useState({
    foodName: "",
    amount: "1",
  });

  const valueOnChangeHandler = (props) => (event) => {
    setInputvalues({ ...inputValues, [props]: event.target.value });
  };

  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    const { foodName, amount } = inputValues;
    console.log(inputValues);
    fetchCalorieData(foodName, amount);
    setInputvalues({
      foodName: "",
      amount: "1",
    });
  };
  const classes = useStylesForCalorieCounterForm();

  return (
    <CalorieCOunterForm onSubmit={formOnSubmitHandler}>
      <InputField
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
      <InputField
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

const mapDispatchToProps = (dispatch) => ({
  fetchCalorieData: (fooditem, quantity) =>
    dispatch(fetchCalorieDataAsync({ fooditem, quantity })),
});

export default connect(null, mapDispatchToProps)(FindCalorieAmountForm);
