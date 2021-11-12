import { InputAdornment } from "@material-ui/core";
import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  InputField,
  MealTypesForm,
} from "../input-fields/input-fields.component";

export const DateField = ({ error, onChange, value }) => {
  return (
    <InputField
      type="date"
      id="date"
      color="secondary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
    />
  );
};
export const CarbohydrateField = ({ error, onChange, value }) => {
  return (
    <InputField
      label="Carbohydrate"
      type="number"
      id="carbo"
      color="secondary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      InputProps={
        ({ inputProps: { min: 0 } },
        {
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        })
      }
    />
  );
};
export const ProteinField = ({ error, onChange, value }) => {
  return (
    <InputField
      label="Protein"
      type="number"
      id="protein"
      color="secondary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      InputProps={
        ({ inputProps: { min: 0 } },
        {
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        })
      }
    />
  );
};
export const FatField = ({ error, onChange, value }) => {
  return (
    <InputField
      label="Fat"
      type="number"
      id="fat"
      color="secondary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      min="0"
      InputProps={
        ({ inputProps: { min: 0 } },
        {
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        })
      }
    />
  );
};

export const MealTypeField = ({ error, onChange, value }) => {
  return (
    <MealTypesForm
      id="meal-type"
      select
      label="Meal Type"
      value={value}
      onChange={onChange}
      variant="filled"
      error={error}
      color="secondary"
    />
  );
};

export const SubmitButton = () => {
  return (
    <CustomButton
      size="medium"
      color="secondary"
      variant="contained"
      type="submit"
    >
      Submit
    </CustomButton>
  );
};
export const CloseButton = ({ onClick }) => {
  return (
    <CustomButton
      size="medium"
      color="secondary"
      variant="outlined"
      type="button"
      onClick={onClick}
    >
      Close
    </CustomButton>
  );
};