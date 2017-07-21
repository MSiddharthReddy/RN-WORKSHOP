import React, { Component } from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Button } from './CommonComponents';

const list = require('./dataStore');

export default class List extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ paddingTop: 30 }}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1
  },
  imageStyle: {
    width: 52,
    height: 37,
    marginBottom: 5,
    marginRight: 10
  }
});

// export default List;
