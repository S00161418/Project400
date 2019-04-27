import React from 'react'
import { Text, View, Picker, Button } from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';
import firebase from 'react-native-firebase'
import EventComponent from '../Components/EventComponent'


export default class Events extends React.Component {

  state = {
    events: [],
    userInterests: [],
    selectedInterest: undefined,
    eventId: undefined
  }


  componentDidMount() {
    this.user = firebase.auth().currentUser



    this.userInterest(this.user)
    this.event()



  }

  userInterest(user) {
    let userInterests = firebase.database().ref(`/users/${user.uid}/interest/`)
    userInterests.on('value', (snapshot) => {
      let interests = snapshot.val();

      let data = Object.values(interests)


      this.setState({ userInterests: data })
      console.log(this.state.userInterests)
    })
  }

  event() {
    let eventsRef = firebase.database().ref('/events')
    eventsRef.orderByChild('eventInterest').equalTo(this.state.selectedInterest).on('value', (snapshot) => {
      let events = snapshot.val();

      let data = Object.values(events)

      console.log(data);
      this.setState({ events: data })
      console.log(this.state.events)
    });
  }


  updateEvent(value) {
    this.setState({ selectedInterest: value },
      () => { this.event() }
    )
  }


  render() {
    console.log(this.state.events)
    return (
      <View>
        <Picker
          style={{ marginLeft: 15, height: 40 }}

          selectedValue={this.state.selectedInterest}
          onValueChange={(value) => this.updateEvent(value)}
        >
          <Picker.Item label="Select Interest" value={null} />
          {
            this.state.userInterests.map((v, i) => {
              return <Picker.Item label={v.interestName} value={v.interestName} key={i} />
            })
          }
        </Picker>

        {

          this.state.events.length > 0
            ? <EventComponent events={this.state.events} />
            : <Spinner color='blue' />

        }

      </View>
    );
  }
}
