// Login.js
import React from 'react'
import { Container, Header,Label,Text, Content, Form, Item,Button,Body,Input, Title } from 'native-base';
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = { email: '', password: ''}
  handleLogin = () => {
  if(this.state.email && this.state.password){
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      
  }
  
  }
  render() {
    return (
     <Container >
       <Content>
         <Header>
           <Body>
             <Title  style={{ alignSelf: "center"}}>Login</Title>
           </Body>
         </Header>
        
         <Form>
       
       

         <Item stackedLabel>
         <Label>Email</Label>
          <Input
          style={{ alignSelf: "center"}}
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}/>
        </Item> 

         <Item stackedLabel last>
         <Label>Password</Label>
         <Input
          secureTextEntry
          style={{ alignSelf: "center" }}
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
         </Item>
         
       
        

        <Button 
          style={{ alignSelf: "center", margin: 10 }} 
          onPress={this.handleLogin}>
          <Text>Login</Text>
        </Button>

        

        <Text style={{color: 'blue', alignSelf: 'center'}}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          Don't have an account? Sign Up
        </Text>

          </Form>
        </Content>
      </Container>
    )
  }
}
