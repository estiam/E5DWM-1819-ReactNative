import React from 'react'
import { View, Text } from 'native-base';

class Grades extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Mes Notes'
  }

  render() {
    return (
      <View>
        <Text>Grades View x)</Text>
      </View>
    );
  }
}

export default Grades;