import React, { Component } from 'react'
import { View, Text } from 'native-base';

const B = ({ propToto }) => {
  return (
  <View>
    <Text style={{ fontSize: 30}}>{propToto}</Text>
  </View>);
}

export default B;