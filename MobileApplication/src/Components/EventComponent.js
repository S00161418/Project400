import React, { Component } from 'react';
import {  View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';





export default class EventComponent extends Component {



  render() {
    return (
      
      <ScrollView contentContainerStyle={styles.eventBox}>
        {this.props.events.map((events, index) => {
            return (
              <View key={index}>
              <TouchableOpacity  onPress={ () => alert('Clicked')}>
           
                <View style={styles.eventContent}  >
                <Text  style={styles.userName}> {events.eventName}</Text>
                  <View style={{flexDirection: 'row'}}>
                  <Text  style={styles.interest}>{events.eventInterest}</Text>
                  
                  <Text  style={styles.eventTime}> {events.eventDateTime}</Text>
                  </View>
                 </View>
          
            </TouchableOpacity>
            </View>
            )
        })}
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
    
    eventBox: {
     
      
      backgroundColor: "#DCDCDC",
      paddingBottom: 50,
      
    },
    
    
    
    eventContent: {
      
     
      marginTop:10,
      marginLeft:5,
      marginRight: 5,
      backgroundColor: '#FFFFFF',
      padding:10,
      borderRadius:10
    },
    interest:{
      fontSize:15,
      color: "#646464",
     
    },
   
    userName:{
      fontSize:18,
      color:"#151515",
      alignSelf: 'center',
    },
    eventTime:{
      fontSize:15,
      color:"#646464",
      marginLeft: 'auto'

      
    },
  });
