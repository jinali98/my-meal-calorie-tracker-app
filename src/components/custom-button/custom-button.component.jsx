import { Button } from "@material-ui/core";
import React from "react";

const CustomButton = ({
  children,
  type,
  variant,
  color,
  endIcon,
  size,
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      endIcon={endIcon}
      type={type}
      {...otherProps}
      size={size}
    >
      {children}
    </Button>
  );
};

export default CustomButton;