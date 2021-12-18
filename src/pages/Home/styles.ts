import styled from 'styled-components/native';
import {BACKGROUND_COLOR_PRIMARY, BACKGROUND_COLOR_SECONDARY} from "assets/colors";


export const Screen = styled.View`
  flex: 1;
  background-color: ${BACKGROUND_COLOR_PRIMARY};
`;


export const HeaderContainer = styled.View`
  flex: 1;
`;


export const BodyContainer = styled.View`
  flex: 11;
  background-color: ${BACKGROUND_COLOR_SECONDARY};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top:20px;

`;
