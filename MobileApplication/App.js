
import { createSwitchNavigator,createAppContainer } from 'react-navigation'

import Loading from './src/Pages/Loading'
import SignUp from './src/Pages/SignUp'
import Login from './src/Pages/Login'
import Main from './src/Pages/Main'
import Events from './src/Pages/Events'
import EventInfo from './src/Pages/EventInfo'
import CreateEvent from './src/Pages/CreateEvent'
const RootSwitch = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    Events,
    EventInfo,
    CreateEvent

  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootSwitch)
export default App
