import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Button } from './CommonComponents';
import { Actions } from 'react-native-router-flux';


const Swiper = () =>
<View style={{ paddingTop: 100 }}>
    <Content> Swiper </Content>
    <Button
    onPress={() => Actions.list()}
    > Next </Button>
</View>;

export default Swiper;
