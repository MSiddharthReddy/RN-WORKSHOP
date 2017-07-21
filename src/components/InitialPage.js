import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const InitialPage = () =>
  <View>
  <Text style={{ paddingTop: 100 }}> Initial </Text>
  <Button
  onPress={() => Actions.card()}
  title="Next"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
</View>;

export default InitialPage;
