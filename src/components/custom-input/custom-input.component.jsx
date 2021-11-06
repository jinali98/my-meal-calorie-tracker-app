import React from "react";

const CustomInput = ({ type, placeholder, value, ...otherprops }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      {...otherprops}
    />
  );
};

export default CustomInput;
