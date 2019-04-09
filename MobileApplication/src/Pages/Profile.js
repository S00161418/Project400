import React from 'react'
import { Container, Header,Label,Text, Content, Form, Item,Button,Body,Input, Title } from 'native-base';
import Picture from '../Components/PictureComponent'
import ProfilePicker from '../Components/ProfilePicker'
import {withNavigation} from 'react-navigation'

class Profile extends React.Component {

  
    render() {

      return (
      <Container>
         <Picture />
         <ProfilePicker/>

         <Button style={{alignSelf: 'center', margin: 10}} onPress={() => this.props.navigation.navigate('Interests')}>
           <Text>Choose Interests</Text>
         </Button>
         
      </Container>
      );
    }
  }

  export default withNavigation(Profile);