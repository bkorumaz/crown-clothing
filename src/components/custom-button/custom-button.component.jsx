import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

function CustomButton({ children, ...otherProps }) {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
}

export default CustomButton;
