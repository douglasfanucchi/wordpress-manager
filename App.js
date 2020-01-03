import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Reducers from "./src/reducers";
import Posts from "./src/screens/Posts";
import CustomDrawerContentComponent from './src/components/custom-drawer';

const store = createStore(Reducers);

export default function App() {
  const AppNavigator = createDrawerNavigator(
    {
      Posts: {
        screen: Posts
      }
    },
    {
      statusBarAnimation: true,
      hideStatusBar: true,
      contentComponent: CustomDrawerContentComponent
    }
  );

  const Container = createAppContainer(AppNavigator);

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

