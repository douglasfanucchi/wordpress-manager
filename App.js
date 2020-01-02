import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation'

import Login from './src/screens/Login'

export default function App() {
  const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    }
  })

  const Container = createAppContainer(AppNavigator)

  return <Container />
}
