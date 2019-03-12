import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';
import { Container, Header, Icon, Content, Footer, Button, Left, Body, Right, Title, FooterTab } from 'native-base';
import Planning from './Planning';
import Groups from './Groups';
import { StackActions, NavigationActions } from 'react-navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);

    this.state = {
      view: 'planning',
    }
  }
  static navigationOptions = {
    title: 'my.genius'
  }

  toggleView(view) {
    this.setState({ view });
  }

  render() {
    console.log(this.props);
    let currentView = this.state.view === 'planning' ? <Planning/> : <Groups navigation={this.props.navigation} />;
    
    return (
      <Container>
        <Content>
          {currentView}
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.toggleView('planning')}>
              <Icon name='calendar' />
              <Text>Mon Planning</Text>
            </Button>
            <Button onPress={() => this.toggleView('grades')}>
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