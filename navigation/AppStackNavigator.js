import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Home from '../interfaces/Home';
import Grades from '../interfaces/Grades';

const AppStackNavigator = createStackNavigator({
  Home, 
  Grades
}, {
  initialRouteName: 'Home'
});
export default AppStackNavigator;