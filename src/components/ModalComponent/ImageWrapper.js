// For spacing between components inside a Modal.

import React from 'react';
import { View, Image } from 'react-native';
import { Content } from '../CommonComponents';

const ImageWrapper = ({ data }) => {

  return (
    <View style={{ alignItems: 'center' }}>
      
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    paddingBottom: 5,
    margin: 10
  },
  imageStyle: {
    width: 120,
    height: 150,
    margin: 15,
    shadowColor: '#79CDCD',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderRadius: 3
  }
};

export default ImageWrapper;
