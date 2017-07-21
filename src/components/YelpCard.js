import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity
} from 'react-native';
import { Card, ImageWrapper, Details } from './ModalComponents';
import { Button, Content } from './CommonComponents';

const list = require('./dataStore');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default class YelpCard extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (

    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: this.fadeAnim
  }
});
