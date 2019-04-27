import React from 'react'
import { Container, Header, Label, Text, Content, Form, Item, Button, Body, Input, Title } from 'native-base';

import ProfilePicker from '../Components/ProfilePicker'
import { ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import Interests from '../Pages/Interests'

class Profile extends React.Component {
  state = {
    test: false
  }

  testfunc() {
    this.setState({ test: true })
  }

  render() {

    return (
      <Container>




        <Label style={{ alignSelf: 'center', marginTop: 15 }}>Choose Interests</Label>

        <Interests />

      </Container>
    );
  }
}

export default withNavigation(Profile);