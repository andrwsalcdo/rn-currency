import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import styles from './styles'; 

const ClearButton = ({ text, onPress }) => (
      <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.wrapper}>
                  <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
                  <Text style={styles.text}>{text}</Text>
            </View>
      </TouchableOpacity>
)

export default ClearButton;