import React from 'react'
import { Container, Header,Label,Text, Content, Form, Item,Button,Body,Input, Title } from 'native-base';
import firebase from 'react-native-firebase'
import {addUser} from '../Services/DataBaseService'

export default class SignUp extends React.Component {
  state = { email: '', password: '', firstName: '', secondName: '', confirmPass: ''}
handleSignUp = () => {
  if(this.state.email && this.state.password){
  addUser(this.state.email, this.state.password)
  firebase
  .auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => this.props.navigation.navigate('Main'))
  }
}

render() {
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title style={{alignSelf: 'center'}}>Sign Up</Title>
            </Body>
          </Header>

          <Form>

          <Item stackedLabel>
          <Label>First Name</Label>
          <Input
            
            autoCapitalize="none"
            style={{alignSelf: 'center'}}
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
          />
        </Item>

        <Item stackedLabel>
          <Label>Second Name</Label>
          <Input
            
            autoCapitalize="none"
            style={{alignSelf: 'center'}}
            onChangeText={secondName => this.setState({ secondName })}
            value={this.state.secondName}
          />
        </Item>
        
        <Item stackedLabel>
          <Label>Email</Label>
          <Input
            
            autoCapitalize="none"
            style={{alignSelf: 'center'}}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </Item>

        <Item stackedLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry
            autoCapitalize="none"
            style={{alignSelf: 'center'}}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </Item>

        <Item stackedLabel>
          <Label>Retype Password</Label>
          <Input
            secureTextEntry
            autoCapitalize="none"
            style={{alignSelf: 'center'}}
            onChangeText={confirmPass => this.setState({ confirmPass })}
            value={this.state.confirmPass}
          />
        </Item>

        <Button style={{alignSelf: 'center', margin: 10}} onPress={this.handleSignUp}>
          	<Text>Sign Up</Text>
        </Button>


        <Button style={{alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Already have an account? Login</Text>
        </Button>

          </Form>
        </Content>
      </Container>
    )
  }
}
