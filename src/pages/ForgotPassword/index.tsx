import React, { useState } from "react";
import { Image } from "react-native";
import {
  Screen,
  TitleScreen,
  HeaderContainer,
  ImageHeaderContainer,
} from "assets/styles/Screen";
import { BodyContainer } from "./styles";
import { forgotPasswordSteps } from "misc/forgotPasswordSteps";

let ChildComponent: any;
const ForgotPassword = function ForgotPassword(): JSX.Element {
  const [stepCurrent, setStepCurrent] = useState(forgotPasswordSteps[0]);

  ChildComponent = stepCurrent.component;

  return (
    <Screen>
      <HeaderContainer>
        <ImageHeaderContainer>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 120, width: 120 }}
          />
        </ImageHeaderContainer>
        <TitleScreen>{stepCurrent.title}</TitleScreen>
      </HeaderContainer>
      <BodyContainer>
        <ChildComponent setStepCurrent={setStepCurrent}></ChildComponent>
      </BodyContainer>
    </Screen>
  );
};

export default ForgotPassword;
