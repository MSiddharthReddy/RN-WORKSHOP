import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Button } from './CommonComponents';
import { Actions } from 'react-native-router-flux';

const InitialPage = () =>
<View style={{ paddingTop: 100 }}>
  <Content> Initial </Content>
  <Button
  onPress={() => Actions.card()}
  > Next </Button>
</View>;

export default InitialPage;
