import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/index";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
