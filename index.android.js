import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Main from './src/Main';

export default class rn_workshop extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('rn_workshop', () => rn_workshop);
