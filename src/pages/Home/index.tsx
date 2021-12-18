import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {BACKGROUND_COLOR} from "assets/colors";

const Home = function Home():JSX.Element {
  console.log(BACKGROUND_COLOR);
  return (
    <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1 }}>
      <Text>Ola mundo</Text>
    </View>

  );
};

export default Home;
