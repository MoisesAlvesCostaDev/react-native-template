import styled from 'styled-components/native';

import {INPUT_TITLE_COLOR,INPUT_VALIDATION_TEXT_COLOR} from "assets/colors";


export const StyledLabel = styled.Text`
  color:${INPUT_TITLE_COLOR};
  font-size:12px;
`;


export const StyledInputContainer = styled.View`
  height: 73px;
  margin-bottom: 2px;
`;



export const StyledInputRow = styled.View`
flex-direction: row;
align-items: center;
border-bottom-width: 1px;
border-bottom-color:${INPUT_TITLE_COLOR};
height: 40px;
`;

export const StyledValidationText = styled.Text`
  color:${INPUT_VALIDATION_TEXT_COLOR};
  font-size:12px;
  text-align: right;

`;
