import React from 'react'
import {Text, View, Button} from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import firebase from 'react-native-firebase'
import EventComponent from '../Components/EventComponent'

let eventsRef = firebase.database().ref('/events')

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
         
         {
            
              this.state.events.length > 0
              ? <EventComponent events={this.state.events} />
              : <Spinner color='blue' />
          
         }
        
        </View>
      );
    }
  }
