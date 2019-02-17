import React from 'react'
import {Text, TouchableOpacity,TextInput, View,Button,StyleSheet} from 'react-native';
import {createEvent} from '../Services/DataBaseService'
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class CreateEvent extends React.Component {

  state = {datetime: '', eventName: '', eventDescription: '',errorMessage: null,isDateTimePickerVisible: false, }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({datetime: date})
    this._hideDateTimePicker();
  };

  handleSubmit = () => {
  if(this.state.eventName && this.state.eventDescription && this.state.datetime){
  createEvent(this.state.eventName,this.state.eventDescription,this.state.datetime)
  }
  }
    render() {
      
      return (
        <View>
          <Button onPress={() => this.props.navigation.navigate('Main')} title="Go Back"/>
          <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Event Name"
          onChangeText={eventName => this.setState({eventName })}
          value={this.state.eventName}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Event Description"
          onChangeText={eventDescription => this.setState({ eventDescription })}
          value={this.state.eventDescription}
        />
        
        
        <Button onPress={this._showDateTimePicker} title='Pick Date and Time'/>
         
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          mode={'datetime'}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
       
       
        <Button onPress={this.handleSubmit} title="Create Event"/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })