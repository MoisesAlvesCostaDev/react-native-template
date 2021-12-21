import React from "react";
import { Screen } from "assets/styles/Screen";
import { BodyContainer, HeaderContainer } from "./styles";

const Home = function Home(): JSX.Element {
  return (
    <Screen>
      <HeaderContainer></HeaderContainer>
      <BodyContainer></BodyContainer>
    </Screen>
  );
};

export default Home;
