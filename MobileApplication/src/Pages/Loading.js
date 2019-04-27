
import React from 'react'

import { Container, Header, Content, Spinner } from 'native-base';
import firebase from 'react-native-firebase'

export default class Loading extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color='blue' />
        </Content>
      </Container>
    )
  }
}

