import React from "react";
import { createAppContainer } from "react-navigation";

import { MainNavigator } from "./navigation/MainNavigator.js"

const AppContainer = createAppContainer(MainNavigator);

export default App = () => {
  return <AppContainer />
}