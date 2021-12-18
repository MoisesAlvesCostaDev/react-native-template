import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

export const valor = 10;

AppRegistry.registerComponent(appName, () => App);
