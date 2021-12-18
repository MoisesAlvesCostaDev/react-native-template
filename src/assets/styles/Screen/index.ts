import styled from 'styled-components/native';
import {BACKGROUND_COLOR_PRIMARY,TITLE_SCREEN_TEXT_COLOR} from "assets/colors";


export const Screen = styled.View`
  flex: 1;
  background-color: ${BACKGROUND_COLOR_PRIMARY};
`;


export const TitleScreen = styled.Text`
color: ${TITLE_SCREEN_TEXT_COLOR};
font-size: 16px;
font-weight: bold;
`;



export const HeaderContainer = styled.View`
  flex: 4;
  padding: 13px;
`;



export const ImageHeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
