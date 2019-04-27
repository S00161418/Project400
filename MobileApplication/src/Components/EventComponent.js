import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';




class EventComponent extends Component {



  render() {
    return (

      <ScrollView contentContainerStyle={styles.eventBox}>
        {this.props.events.map((events, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EventInfo',
                {
                  eventName: events.eventName,
                  eventDescription: events.eventDescription,
                  eventDate: events.eventDateTime,
                  eventJoined: events.eventJoined,
                  eventID: events.eventID,
                  eventLocation: events.location
                })}>

                <View style={styles.eventContent}  >
                  <Text style={styles.userName}> {events.eventName}</Text>
                  <Text style={styles.eventTime}> {events.eventDateTime}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.interest}>{events.eventInterest}</Text>

                    <Text style={styles.location}>{events.location}</Text>
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


    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10
  },
  interest: {
    fontSize: 15,
    color: "#646464",

  },
  location: {
    fontSize: 15,
    color: "#646464",
    marginLeft: 'auto'
  },

  userName: {
    fontSize: 15,
    color: "#151515",
    alignSelf: 'center',
  },
  eventTime: {
    fontSize: 15,
    color: "#646464",
    marginLeft: 'auto'


  },
});

export default withNavigation(EventComponent)