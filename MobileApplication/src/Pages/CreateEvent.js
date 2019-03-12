import React from 'react'
import {Container,Input,Form,Button,Text,Textarea, Content, Item, Label,DatePicker} from 'native-base';
import {createEvent} from '../Services/DataBaseService'


export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
   
    this.setDate = this.setDate.bind(this);
  }
  state = { eventName: '', eventDescription: '', chosenDate: new Date()}

 

  handleSubmit = () => {
  if(this.state.eventName && this.state.eventDescription && this.state.chosenDate){
  createEvent(this.state.eventName,this.state.eventDescription,this.state.chosenDate)

  this.setState({
    eventName: '',
    eventDescription: '',
    chosenDate: new Date()
  })

  }
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
    render() {
      var today = new Date()
      return (
        <Container>
          <Content >
            <Form>
              <Item stackedLabel >
              <Label>Event Name</Label>
                <Input
                style={{marginTop:10}}
                  autoCapitalize="none"
                  onChangeText={eventName => this.setState({eventName })}
                  value={this.state.eventName}
                />
              </Item>
              
              <Label style={{marginLeft:15, marginTop:10}}>Event Description</Label>
                <Textarea
                  style={{marginLeft:15, marginRight:15}}
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
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Click here to choose date!"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Item>

            <Button style={{alignSelf:'center', margin: 10}} onPress={this.handleSubmit}>
              <Text>Create</Text>
            </Button>

  	        </Form> 
          </Content>
        </Container>
      );
    }
  }

 