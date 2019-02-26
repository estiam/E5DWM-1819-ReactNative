import React, { Component } from 'react'
import B from './B';

class A extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      toto: 'titi'
     };

     setTimeout(() => {
       this.setState({toto : 'toto'})
     }, 3000);
  }
  render() {
    return (
      <B propToto={this.state.toto} />
    );
  }
}

export default A;