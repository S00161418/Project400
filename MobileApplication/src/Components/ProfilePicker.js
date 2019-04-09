import React, { Component } from 'react';
import { Container, Content, Form, Item, Picker,Label } from 'native-base';
export default class ProfilePicker extends Component {
    constructor(props) {
    super(props);
    this.state = {
      Age: undefined,
      Gender: undefined
    };
  }
  onValueChange1(value) {
    this.setState({
      Age: value
    });
  }

  onValueChange2(value) {
    this.setState({
      Gender: value
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form style={{margin:5}}>
          <Label>Choose Gender</Label>
            <Item picker>
            
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Choose your Gender"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.Gender}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
               
              </Picker>
            </Item>
            <Label>Choose Age Range</Label>
            <Item  picker>
            
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Choose your Age Range"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.Age}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Picker.Item label="18-24" value="Age1" />
                <Picker.Item label="25-34" value="Age2" />
                <Picker.Item label="35-44" value="Age3" />
                <Picker.Item label="45-54" value="Age4" />
                <Picker.Item label="55-64" value="Age5" />
                <Picker.Item label="65+" value="Age6" />

              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}