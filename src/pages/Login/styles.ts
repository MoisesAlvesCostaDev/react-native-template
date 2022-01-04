import styled from "styled-components/native";
import { BACKGROUND_COLOR_SECONDARY, BUTTON_TEXT_COLOR } from "assets/colors";

export const BodyContainer = styled.View`
  flex: 6;
  background-color: ${BACKGROUND_COLOR_SECONDARY};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 87px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ForgotPasswordText = styled.Text`
  margin-top: 25px;
  text-align: center;
  text-decoration-line: underline;
  color: ${BUTTON_TEXT_COLOR};
`;
