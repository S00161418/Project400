import React from 'react'
import {Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase'
import EventComponent from '../Components/EventComponent'
import { List, ListItem } from 'react-native-elements'

let eventsRef = firebase.database().ref('/users/events')

export default class Events extends React.Component {

  state = {
    events: []
}


componentDidMount() {
  eventsRef.on('value', (snapshot) => {
      let events = snapshot.val();
      
      let data = Object.values(events)
      
      console.log(data);
      this.setState({events: data})
      console.log(this.state.events)
   });
   
}



    render() {
      console.log(this.state.events)
      return (
        <View>
          <Button onPress={ () => this.props.navigation.navigate('Main')} title="Go Back"/>
         {
            
              this.state.events.length > 0
              ? <EventComponent events={this.state.events} />
              : <Text>No items</Text>
          
         }
        
        </View>
      );
    }
  }
