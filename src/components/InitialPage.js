import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TextInput, Dimensions } from 'react-native';
import { Button, Content } from './CommonComponents';

export default class InitialPage extends Component {
  constructor() {
    super();
  }

  render() {
    const { container, textBox } = styles;

    return (
      <View style={container}>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00EEEE',
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 150
  },
  textBox: {
    height: 40,
    backgroundColor: '#E0FFFF',
    borderColor: '#79CDCD',
    borderWidth: 0.3,
    borderRadius: 10,
    shadowColor: '#79CDCD',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    width: Dimensions.get('window').width - 60,
    marginHorizontal: 30,
    marginVertical: 15,
    textAlign: 'center'
  }
};
