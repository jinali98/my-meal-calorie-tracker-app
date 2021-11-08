import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { convertToArray } from "../../utils/convertToArray";
import { mealTypes } from "../../constants/mealTypes";

export const DateForm = ({ type, placeholder, value, ...otherprops }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      {...otherprops}
    />
  );
};
export const CalorieTypeForm = ({
  type,
  placeholder,
  value,
  ...otherprops
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      {...otherprops}
    />
  );
};

export const SearchForm = ({
  label,
  search,
  type,
  error,
  variant,
  onChange,
  value,
  color,
  className,
  InputProps,
  ...otherProps
}) => {
  return (
    <TextField
      className={className}
      label={label}
      id={search}
      type={type}
      color={color}
      error={error}
      variant={variant}
      onChange={onChange}
      value={value}
      InputProps={InputProps}
      min="1"
      {...otherProps}
    />
  );
};

export const MealTypesForm = ({
  id,
  label,
  value,
  onChange,
  variant,
  color,
  className,
  ...otherProps
}) => {
  return (
    <TextField
      className={className}
      id={id}
      select
      label={label}
      value={value}
      onChange={onChange}
      variant={variant}
      color={color}
      {...otherProps}
    >
      {convertToArray(mealTypes).map((option) => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
