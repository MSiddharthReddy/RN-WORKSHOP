import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Button, Content } from './CommonComponents';
import {
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet,
  Animated
} from 'react-native';

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: []
    };
  }

  getProduct(food, place) {
    console.log(food, place);
    axios
      .post('https://morning-hamlet-88026.herokuapp.com/realData', {
        food: food,
        location: place
      })
      .then(response => {
        console.log(response);
        this.response = response;
        this.setState({
          visible: !this.state.visible,
          data: response.data.slice(0, 5)
        });
      });
  }

  componentWillMount() {
    console.log(this.props);
    this.getProduct(this.props.food, this.props.place);
  }

  renderProduct() {
    if (!this.state.visible) {
      return (
        <View>
          <ActivityIndicator
            animating={!this.state.visible}
            color="blue"
            size="large"
          />
        </View>
      );
    } else {
      return (
        <View >
        <Content> Records Returned {this.state.data.length} </Content>
        <Button
        onPress={() => Actions.initial()}
        > Next </Button>
    </View>
  );
    }
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        {this.renderProduct()}
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
