import React from 'react'
import Profile from '../Pages/Profile'
import CreateEvent from '../Pages/CreateEvent'
import Events from '../Pages/Events'
import {Container, Header,Icon,Button,Body, Title, Tabs,Tab, Right} from 'native-base';
import firebase from 'react-native-firebase'


export default class Main extends React.Component {
 
  constructor(props){
    super(props)
   
    this.signOutUser = this.signOutUser.bind(this)
  }
  state = { currentUser: null, }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

signOutUser = async () => {
  try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('Login');
  } catch (e) {
      console.log(e);
  }
}


  
render() {
  
return (
      <Container>
        <Header hasTabs>
            <Body>
            <Title  style={{ alignSelf: "center"}}>(Logo)</Title>
            </Body>
            <Right>
            <Button transparent onPress={this.signOutUser}>
              <Icon name="log-out" />
            </Button>
            </Right>
        </Header>
          
        <Tabs>
          <Tab heading="Events">
            <Events/>
          </Tab>
        
          <Tab heading="Profile">
            <Profile/>
          </Tab>
          
          <Tab heading="Create Event">
            <CreateEvent/>
          </Tab>
        </Tabs>
        
      </Container>
    )
  }
}
