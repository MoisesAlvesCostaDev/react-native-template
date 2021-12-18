import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {BACKGROUND_COLOR_PRIMARY, BACKGROUND_COLOR_SECONDARY} from "assets/colors";
import {Screen,BodyContainer,HeaderContainer} from './styles'

const Home = function Home():JSX.Element {
  return (
    <Screen>
      <HeaderContainer></HeaderContainer>
      <BodyContainer>
      </BodyContainer>
    </Screen>

  );
};

export default Home;



