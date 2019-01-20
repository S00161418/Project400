
import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator,createAppContainer } from 'react-navigation'
// import the different screens
import Loading from './src/Pages/Loading'
import SignUp from './src/Pages/SignUp'
import Login from './src/Pages/Login'
import Main from './src/Pages/Main'
// create our app's navigation stack
const RootSwitch = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootSwitch)
export default App
