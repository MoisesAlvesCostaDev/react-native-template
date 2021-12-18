import React from "react";
import {Image } from "react-native";
import {
  Screen,
  TitleScreen,
  HeaderContainer,
  ImageHeaderContainer,
} from "assets/styles/Screen";
import { BodyContainer } from "./styles";

const Home = function Home(): JSX.Element {
  return (
    <Screen>
      <HeaderContainer>
        <ImageHeaderContainer>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 120, width: 120 }}
          />
        </ImageHeaderContainer>
        <TitleScreen>Login</TitleScreen>
      </HeaderContainer>
      <BodyContainer></BodyContainer>
    </Screen>
  );
};

export default Home;
