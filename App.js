import React from 'react';
import {createAppContainer } from 'react-navigation';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import ProfilePhoto from './components/ProfilePhoto';
import StateExample from './components/StateExample';
import AppStackNavigator from './navigation/AppStackNavigator';
import { Root } from 'native-base';

export default class App extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppStackNavigator);

    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}

