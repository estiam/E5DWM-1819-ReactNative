import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Footer, Left, Body, Right, Title } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>
          <StatusBar/>
          <Left></Left>
          <Body>
            <Title>my.genius</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Home;