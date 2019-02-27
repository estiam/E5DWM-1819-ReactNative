import React from 'react';
import { Button } from 'react-native';
import { View, Container, Item, Content, Form, Input } from 'native-base';
import { SSO_URL } from '../constants/constants';
import { AsyncStorage } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      username: null,
      password: null,
    };
  }

  async login() {
    fetch(SSO_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state),
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.sToken) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
      }

      // ////// 
      //   const user = JSON.parse(await AsyncStorage.getItem('user'));
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input onChangeText={(username) => this.setState({ username })} placeholder="Username" />
            </Item>
            <Item>
              <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} placeholder="Password" />
            </Item>
            <Item>
              <Button title="Sign In !" onPress={this.login}></Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;