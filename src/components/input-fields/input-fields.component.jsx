import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { convertToArray } from "../../utils/convertToArray";
import { mealTypes } from "../../constants/mealTypes";

export const InputField = ({
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
  min,
  onBlur,
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
      onBlur={onBlur}
      value={value}
      InputProps={InputProps}
      min={min}
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
  onBlur,
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
      onBlur={onBlur}
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
