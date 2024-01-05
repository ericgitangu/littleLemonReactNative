import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import React from "react";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
