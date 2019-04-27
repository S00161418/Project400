import React from 'react'
import firebase, { Firebase } from 'react-native-firebase'
import { Text, Container, Content, Textarea, Form, Item, Input, Label, Header, Left, Button, Icon, Body, Title } from 'native-base'

export default class EventInfo extends React.Component {

  state = {
    disabled: false
  }

  update(eventID) {

    firebase.database().ref(`/events/${eventID}/eventJoined`).update('2')
  }



  render() {
    const { navigation } = this.props;
    const eventName = navigation.getParam('eventName')
    const eventDescription = navigation.getParam('eventDescription')
    const eventDate = navigation.getParam('eventDate')
    const eventLocation = navigation.getParam('eventLocation')
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate('Main')} >
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Event Information</Title>
            </Body>

          </Header>
          <Form>
            <Item stackedLabel >
              <Label>Event Name</Label>
              <Text style={{ marginTop: 10 }}>{eventName}</Text>
            </Item>

            <Label style={{ marginLeft: 15, fontSize: 15, color: 'black', marginTop: 15 }}>Event Description</Label>
            <Textarea editable={false} value={eventDescription} bordered
              style={{ marginLeft: 15, marginRight: 1 }} />

            <Item stackedLabel style={{ marginTop: 15 }}>
              <Label>Event Date</Label>
              <Text style={{ marginTop: 10 }}>{eventDate}</Text>
            </Item>

            <Item stackedLabel style={{ marginTop: 15 }}>
              <Label>Location</Label>
              <Text style={{ marginTop: 10 }}>{eventLocation}</Text>
            </Item>


          </Form>
        </Content>
      </Container>
    );
  }
}