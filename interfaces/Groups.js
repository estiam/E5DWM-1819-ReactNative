import React from 'react'
import { View, Text, Button } from 'native-base';

class Groups extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Groups</Text>
        <Button onPress={() => this.props.navigation.navigate('Grades') }><Text>Navigate</Text></Button>
      </View>
    );
  }
}

export default Groups;