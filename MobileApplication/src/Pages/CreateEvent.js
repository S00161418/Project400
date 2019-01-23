import React from 'react'
import {Text, View,Button} from 'react-native';

export default class CreateEvent extends React.Component {
    render() {
      
      return (
        <View>
          <Button onPress={() => this.props.navigation.navigate('Main')} title="Go Back"/>
          <Text>CreateEvent</Text>
        </View>
      );
    }
  }