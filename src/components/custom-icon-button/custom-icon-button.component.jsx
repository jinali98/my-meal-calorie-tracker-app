import { IconButton } from "@material-ui/core";
import React from "react";

const CustomIconButton = ({
  children,
  type,
  variant,
  color,
  ariaLabel,
  ...otherProps
}) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      variant={variant}
      color={color}
      type={type}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
