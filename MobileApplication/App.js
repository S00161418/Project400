
import { createSwitchNavigator,createStackNavigator,createAppContainer } from 'react-navigation'

import Loading from './src/Pages/Loading'
import SignUp from './src/Pages/SignUp'
import Login from './src/Pages/Login'
import Main from './src/Pages/Main'
import EventInfo from './src/Pages/EventInfo'
import Interests from './src/Pages/Interests'
import Profile from './src/Pages/Profile'


const AppNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading },
    SignUp: {screen: SignUp },
    Login: {screen: Login },
    Main: {screen: Main},
    EventInfo: {screen: EventInfo},
    Interests: {screen: Interests},
    Profile: {screen: Profile},

  },
  {
    initialRouteName: 'Loading'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer

