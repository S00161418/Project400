import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class Picture extends Component {
  render() {
    const uri = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    return (
      <Container>
        <Content>
          <Thumbnail large source={{ uri: uri }} style={{ alignSelf: 'center', marginTop: 60 }} />
        </Content>
      </Container>
    );
  }
}