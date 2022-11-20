import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/index";
import { AuthProvider } from "hooks/Auth";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
