import React, { Component } from 'react';
import { Container, Content, ListItem, List, Text, Left, Right, Switch, Body, CheckBox } from 'native-base';
import { addInterest, deleteInterest } from '../Services/DataBaseService'
import firebase from 'react-native-firebase'


export default class InterestsComponent extends Component {

  state = {
    checked: []
  }

  isItemChecked(interestName) {
    return this.state.checked.indexOf(interestName) > -1
  }

  componentDidMount() {
    this.user = firebase.auth().currentUser
  }

  manageToggle = (evt, interestName) => {
    if (this.isItemChecked(interestName)) {
      this.setState({
        checked: this.state.checked.filter(i => i !== interestName)
      })
      deleteInterest(this.user, interestName)
    } else {
      this.setState({
        checked: [...this.state.checked, interestName]
      })
      addInterest(this.user, interestName)
    }


  }

  render() {
    console.log(this.state.checked)
    return (

      <Content>
        <List>
          {this.props.interests.map((interests, index) => {
            return (
              <ListItem key={index}>

                <Body>
                  <Text>{interests.Name}</Text>
                </Body>

                <CheckBox checked={this.isItemChecked(interests.Name)}
                  onPress={evt => this.manageToggle(evt, interests.Name)} />

              </ListItem>
            )
          })}
        </List>
      </Content>

    );
  }
}


