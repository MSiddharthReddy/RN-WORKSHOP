import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Content, Button } from './CommonComponents';
import {
  ActivityIndicator,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated
} from 'react-native';

export default class Swiper extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props);
  }


  render() {
    return (
      <View style={styles.backgroundStyle}>
        <Content> Swiper {this.props.food} {this.props.place}</Content>
        <Button
        onPress={() => Actions.list()}
        > Next </Button>
      </View>
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
    height: Dimensions.get('window').height
  }
});
