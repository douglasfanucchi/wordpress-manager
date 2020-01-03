import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from './src/components/Header';
import Reducers from "./src/reducers";
import Home from "./src/screens/Home";

import CustomDrawerContentComponent from './src/components/custom-drawer';

const store = createStore(Reducers);

export default function App() {
  const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    defaultNavigationOptions: {
      header: ({navigation}) => <Header navigation={navigation} />
    }
  })

  const AppNavigator = createDrawerNavigator(
    {
      HomeStack: {
        screen: HomeStack,
        navigationOptions: () => ({
          title: "Home"
        })
      }
    },
    {
      statusBarAnimation: true,
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

