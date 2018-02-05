import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container]; 
  backgroundColor ? containerStyles.push({ backgroundColor }) : null
  
  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={containerStyles}>
          {children}
        </View>
      </TouchableWithoutFeedback>
  ) 
};

export default Container