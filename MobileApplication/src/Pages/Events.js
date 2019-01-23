import React from 'react'
import {Text, View, Button} from 'react-native';

export default class Events extends React.Component {
    render() {
      
      return (
        <View>
          <Text>Events</Text>
          <Button onPress={ () => this.props.navigation.navigate('Main')} title="Go Back"/>
          
        </View>
      );
    }
  }