import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


const List = () =>
  <View>
  <Text style={{ paddingTop: 100 }}> List </Text>
  <Button
  onPress={() => Actions.initial()}
  title="Next"
  color="#841584"
/>
</View>;

export default List;
