import styled from 'styled-components/native';

import {BUTTON_BACKGROUND_COLOR,BUTTON_TEXT_COLOR} from "assets/colors";

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color:${BUTTON_BACKGROUND_COLOR};
  height: 48px;
  align-items: center;
  justify-content:center;
  border-radius:12px;
`;

export const StyledText = styled.Text`
  color:${BUTTON_TEXT_COLOR};
  font-size:16px;
`;


