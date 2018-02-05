import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";

const InputWithButton = props => {
	const { buttonText, onPress, editable = true, textColor } = props;

	const underlayColor = color(styles.$buttonBackgroundBase).darken(styles.$buttonBackgroundModifier);

	const containerStyles = [styles.container];
  (props.editable === false) ? containerStyles.push(styles.containerDisabled) : null; 

	const buttonTextStyles = [styles.buttonText];
	props.textColor ? buttonTextStyles.push({ color: textColor }) : null;

	return (
		<View style={containerStyles}>
			<TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={underlayColor}>
				<Text style={buttonTextStyles}>{buttonText}</Text>
			</TouchableHighlight>
			<View style={styles.separator} />
			<TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
		</View>
	);
};

export default InputWithButton;
