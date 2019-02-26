import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';
import { Container, Header, Icon, Content, Footer, Button, Left, Body, Right, Title, FooterTab } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'my.genius'
  }

  render() {
    return (
      <Container>
        <Content></Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name='calendar' />
              <Text>Mon Planning</Text>
            </Button>
            <Button>
              <Icon name='star-half' />
              <Text>Mes Notes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;