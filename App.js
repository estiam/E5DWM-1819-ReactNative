import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform, StyleSheet, Text, View, TextInput,PermissionsAndroid } from 'react-native';
import ProfilePhoto from './components/ProfilePhoto';
import StateExample from './components/StateExample';
import AppStackNavigator from './navigation/AppStackNavigator';
import { Root } from 'native-base';
import A from './components/A';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux';
import { Permissions } from 'expo';
import * as ExpoPermissions from 'expo-permissions';

console.log("PERM", ExpoPermissions);

const store = createStore(reducer);

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

  // React native pure
  async getPermission() {
    const granted =  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "J'ai besoin d'accéder à la camera",
      message: "Ici un message",
      buttonPositive: "Ok",
      buttonNegative: "Non",
      buttonNeutral: "Demande moi plus tard"
    });
    if(granted) {
      console.log("Granted");
    }
  }

  // React native & Expo
  async getPermissionExpo() {
    const {status} = await Permissions.askAsync(Permissions.CALENDAR);
    if(status === 'granted') {
      console.log("Granted");
    }
  }
  componentDidMount() {
   this.getPermissionExpo();
  }

  render() {
    const AppContainer = createAppContainer(AppStackNavigator);
    const fontsLoaded = this.state.fontsLoaded;

    if (fontsLoaded)
      return (
        <Provider store={store}>
          <Root>
            <AppContainer />
          </Root>
        </Provider>
      );
    else
      return <View><Text>Loading....</Text></View>
  }
}

