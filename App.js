import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './src/reducers'

import Login from './src/screens/Login'

const store = createStore(Reducers)

export default function App() {
  const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    }
  })

  const Container = createAppContainer(AppNavigator)

  return(
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
