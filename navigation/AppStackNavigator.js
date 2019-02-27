import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Home from '../interfaces/Home';
import Grades from '../interfaces/Grades';
import Login from '../interfaces/Login';

const AppStackNavigator = createStackNavigator({
  Home, 
  Grades,
  Login
}, {
  initialRouteName: 'Login'
});
export default AppStackNavigator;