import React from 'react'
import { Container, Spinner, Header, Icon, Button, Body, Title, Left } from 'native-base';
import firebase from 'react-native-firebase'
import InterestsComponent from '../Components/InterestsComponent'


let interestsRef = firebase.database().ref('/interests')

export default class Interests extends React.Component {

  state = {
    interests: []
  }

  Mounted = false

  componentDidMount() {
    this.Mounted = true

    if (this.Mounted) {
      interestsRef.on('value', (snapshot) => {
        let interests = snapshot.val();

        let data = Object.values(interests)

        console.log(data);
        this.setState({ interests: data })
        console.log(this.state.interests)
      });
    }
  }

  componentWillUnmount() {
    this.Mounted = false
  }



  render() {
    console.log(this.state.interests)
    return (
      <Container>

        {

          this.state.interests.length > 0
            ? <InterestsComponent interests={this.state.interests} />
            : <Spinner color='blue' />

        }

      </Container>
    );
  }
}

