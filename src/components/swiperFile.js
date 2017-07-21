import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Swiper = () =>
  <View>
  <Text style={{ paddingTop: 100 }}> Swiper </Text>
  <Button
  onPress={() => Actions.list()}
  title="Next"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
</View>;

export default Swiper;
