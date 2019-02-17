import React, { Component } from 'react';
import {  View, Text, StyleSheet,ScrollView} from 'react-native';




export default class EventComponent extends Component {



  render() {
    return (
      <ScrollView style={styles.eventList}>
        {this.props.events.map((events, index) => {
            return (
            <View style={styles.eventBox} key={index}>
                <View style={styles.eventContent}>
                <Text  style={styles.eventTime}>Event Time: {events.eventDateTime}</Text>
                  <Text  style={styles.userName}>Event: {events.eventName}</Text>
                  <Text  style={styles.description}>Description: {events.eventDescription}</Text>
                  
                </View>
            </View>
            )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    
    eventBox: {
      padding:10,
      marginTop:5,
      marginBottom:5,
      flexDirection: 'row',
    },
    
    eventList:{
      marginTop:20,
     
    },
    
    eventContent: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft:10,
      backgroundColor: '#FFFFFF',
      padding:10,
      borderRadius:10
    },
    description:{
      fontSize:15,
      color: "#646464",
    },
   
    userName:{
      fontSize:16,
      color:"#151515",
    },
    eventTime:{
      fontSize:18,
      color:"#151515",
    },
  });
