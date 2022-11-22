import React from "react";
import { StyledTouchableOpacity, StyledText } from "./style";

export default function Button({ title = "Button title", ...props }) {
  return (
    <StyledTouchableOpacity testID="buttonStyled" {...props}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
}
