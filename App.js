import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import ProfilePhoto from './components/ProfilePhoto';
import StateExample from './components/StateExample';
import AppStackNavigator from './navigation/AppStackNavigator';
import { Root } from 'native-base';

// https://github.com/estiam/E5DWM-1819-ReactNative

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    }
    this.loadFonts();
  }

  async loadFonts() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      });

      this.setState({ fontsLoaded: true });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    const AppContainer = createAppContainer(AppStackNavigator);
    const fontsLoaded = this.state.fontsLoaded;

    if (fontsLoaded)
      return (
        <Root>
          <AppContainer />
        </Root>
      );
    else 
        return <View><Text>Loading....</Text></View>
  }
}

