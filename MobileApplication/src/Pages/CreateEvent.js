import React from 'react'
import { Container, Input, Form, Button, Text, Textarea, Content, Item, DatePicker, Label } from 'native-base';
import { createEvent, createEventUser } from '../Services/DataBaseService'
import firebase from 'react-native-firebase'
import { Picker } from 'react-native'






export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.setDate = this.setDate.bind(this);
  }
  state = { eventName: '', eventDescription: '', chosenDate: new Date(), interest: [], selectedInterest: '', location: '' }

  Mounted = false



  componentDidMount() {
    this.Mounted = true

    if (this.Mounted) {
      this.user1 = firebase.auth().currentUser
      let interestRef = firebase.database().ref(`/users/${this.user1.uid}/interest`)
      interestRef.on('value', (snapshot) => {
        let interests = snapshot.val();

        let data = Object.values(interests)


        this.setState({ interest: data })
        console.log(this.state.interest)
      })
    }
  }

  componentWillUnmount() {
    this.Mounted = false
  }

  handleSubmit = () => {
    if (this.state.eventName && this.state.eventDescription && this.state.chosenDate && this.state.selectedInterest && this.state.location) {
      createEventUser(this.user1, this.state.eventName, this.state.eventDescription, this.state.chosenDate, this.state.selectedInterest, this.state.location)
      createEvent(this.state.eventName, this.state.eventDescription, this.state.chosenDate, this.state.selectedInterest,this.state.location)
      alert('Event Created!')
      this.setState({
        eventName: '',
        eventDescription: '',
        chosenDate: new Date(),
        location: ''
      })

    }
  }

  updateSelect(value) {
    this.setState({ selectedInterest: value })
    console.log(this.state.selectedInterest)
  }

  setDate(newDate) {
    var date = newDate.toString().substr(4, 12)
    this.setState({ chosenDate: date });
  }
  render() {
    var today = new Date()
    console.log(this.state.interest)
    return (
      <Container>
        <Content >
          <Form>
            <Label style={{ marginLeft: 15, marginTop: 10, fontSize: 15, color: 'black' }}>Choose Event Interest</Label>
            <Picker
              style={{ marginLeft: 15 }}
              selectedValue={this.state.selectedInterest}
              onValueChange={(value) => this.updateSelect(value)}>
              <Picker.Item label="Select Interest" value={null} />
              {
                this.state.interest.map((v, i) => {
                  return <Picker.Item label={v.interestName} value={v.interestName} key={i} />
                })
              }
            </Picker>

            <Item stackedLabel >
              <Label>Event Name</Label>
              <Input
                style={{ marginTop: 10 }}
                autoCapitalize="none"
                onChangeText={eventName => this.setState({ eventName })}
                value={this.state.eventName}
              />
            </Item>

            <Item stackedLabel>
              <Label>Location</Label>
              <Input 
                style={{ marginTop: 10 }}
                placeholder = 'Location of Event'
                autoCapitalize="none"
                onChangeText={location => this.setState({location})}
                value={this.state.location}>
              
              </Input>
            </Item>

            <Label style={{ marginLeft: 15, marginTop: 10 }}>Event Description</Label>
            <Textarea
              style={{ marginLeft: 15, marginRight: 15, fontSize: 15, color: 'black' }}
              rowSpan={5}
              bordered
              autoCapitalize="none"
              onChangeText={eventDescription => this.setState({ eventDescription })}
              value={this.state.eventDescription}
            />



            <Item stackedLabel>
              <Label>Choose Date</Label>
              <DatePicker

                defaultDate={today.getDate()}
                format="DD-MM-YYYY"
                minimumDate={new Date(2019, 0, 1)}
                maximumDate={new Date(2019, 11, 31)}

                onDateChange={this.setDate}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
              />
            </Item>

            <Button style={{ alignSelf: 'center', margin: 10 }} onPress={this.handleSubmit}>
              <Text>Create</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}

