import React from 'react'
import { Container, Header, Label, Text, Content, Form, Item, Button, Body, Input, Title } from 'native-base';
import firebase from 'react-native-firebase'
import { addUser } from '../Services/DataBaseService'

export default class SignUp extends React.Component {
  state = { email: '', password: '', userName: '', confirmPass: '' }
  handleSignUp = () => {
    if (this.state.email && this.state.password && this.state.userName && this.state.confirmPass) {
      if (this.state.password == this.state.confirmPass) {

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => { addUser(user.user, this.state.email, this.state.password, this.state.userName, this.state.confirmPass) })
          .then(() => this.props.navigation.navigate('Main'))
      }
      else {
        alert('Passwords do not match!')
      }
    }
    else {
      alert('All fields required!')
    }



  }

  render() {
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title style={{ alignSelf: 'center' }}>Sign Up</Title>
            </Body>
          </Header>

          <Form>

            <Item stackedLabel>
              <Label>Username</Label>
              <Input

                autoCapitalize="none"
                style={{ alignSelf: 'center' }}
                onChangeText={userName => this.setState({ userName })}
                value={this.state.userName}
              />
            </Item>


            <Item stackedLabel>
              <Label>Email</Label>
              <Input

                autoCapitalize="none"
                style={{ alignSelf: 'center' }}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>

            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                autoCapitalize="none"
                style={{ alignSelf: 'center' }}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>

            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                autoCapitalize="none"
                style={{ alignSelf: 'center' }}
                onChangeText={confirmPass => this.setState({ confirmPass })}
                value={this.state.confirmPass}
              />
            </Item>

            <Button style={{ alignSelf: 'center', margin: 10 }} onPress={this.handleSignUp}>
              <Text>Sign Up</Text>
            </Button>




            <Text style={{ color: 'blue', alignSelf: 'center' }}
              onPress={() => this.props.navigation.navigate('Login')}>
              Already have an account? Login
        </Text>

          </Form>
        </Content>
      </Container>
    )
  }
}
