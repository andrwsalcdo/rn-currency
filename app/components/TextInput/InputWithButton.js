import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from 'color'; 

import styles from './styles'


const InputWithButton = (props) => {
    const { buttonText, onPress, editable = true } = props; 

    const underlayColor = color(styles.$buttonBackgroundBase).darken(styles.$buttonBackgroundModifier);
    
    const containerStyles = [styles.container]; 
    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled)
    }

    return (
      <View style={containerStyles}>
        <TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={underlayColor}>
             <Text style={styles.buttonText}>{buttonText}</Text> 
        </TouchableHighlight>  
        <View style={styles.separator} />
        <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
      </View>
    )
}

export default InputWithButton;