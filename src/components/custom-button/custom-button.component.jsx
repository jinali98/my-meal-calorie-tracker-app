import { Button } from "@material-ui/core";
import React from "react";

const CustomButton = ({
  children,
  type,
  variant,
  color,
  endIcon,
  size,
  onClick,
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
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
