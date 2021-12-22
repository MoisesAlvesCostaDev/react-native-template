import React from "react";
import {StyledTouchableOpacity,StyledText} from './style';



export default function Button({title="Button title",...props}) {
  return (
    <StyledTouchableOpacity {...props}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
}

// {
//   name,
//   label,
//   onChangeText,
//   ...rest
// }: InputProps


// interface ButtonProps extends TouchableOpacityProps {
//   title: string
// }
// interface InputReference extends TextInput {
//   value: string
// }


// interface InputProps extends TextInputProps {
//   name: string
//   label: string
// }
// interface InputReference extends TextInput {
//   value: string
// }
