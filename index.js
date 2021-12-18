import { AppRegistry } from "react-native";
import App from "./src/pages/Home";
import { name as appName } from "./app.json";

export const valor = 10;

AppRegistry.registerComponent(appName, () => App);
