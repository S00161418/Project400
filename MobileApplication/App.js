
import { createSwitchNavigator,createAppContainer } from 'react-navigation'

import Loading from './src/Pages/Loading'
import SignUp from './src/Pages/SignUp'
import Login from './src/Pages/Login'
import Main from './src/Pages/Main'
import EventInfo from './src/Pages/EventInfo'
import Interests from './src/Pages/Interests'
import Profile from './src/Pages/Profile'


const RootSwitch = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    EventInfo,
    Interests,
    Profile

  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootSwitch)
export default App
