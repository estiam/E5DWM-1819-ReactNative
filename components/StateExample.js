import React, { Component } from 'react'
import { View, Image, Button } from 'react-native';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);

    this.state = {
      url : 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/375px-025Pikachu.png'
    }
  }

  onPress() {
    this.setState({ url : 'https://cdn.bulbagarden.net/upload/thumb/8/88/026Raichu.png/225px-026Raichu.png'});
  }

  render() {
    return (
      <View>
        <Image style={{ height: 100, width: 100}} source={{uri : this.state.url}} />
        <Button title='Press me !' onPress={this.onPress} />
        {this.props.children}
      </View>
    );
  }
}

export default StateExample;