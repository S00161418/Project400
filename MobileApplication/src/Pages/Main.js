import React from 'react'
import { StyleSheet, Platform, Image, Text, View,} from 'react-native'
import firebase from 'react-native-firebase'
import {Button} from 'native-base'

export default class Main extends React.Component {
  constructor(props){
    super(props)
    
   

    this.signOutUser = this.signOutUser.bind(this)
  }
  state = { currentUser: null }

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
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>

        <Button onPress={this.signOutUser}>
          <Text>Sign Out</Text>
        </Button>
        
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})