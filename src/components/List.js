import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Button } from './CommonComponents';
import { Actions } from 'react-native-router-flux';


const List = () =>
  <View style={{ paddingTop: 100 }}>
    <Content> List </Content>
    <Button
    onPress={() => Actions.initial()}
    > Next </Button>
</View>;

export default List;
