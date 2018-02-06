import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./styles";
import Icon from "./Icon";

const ListItem = ({
	currencySymbol,
	currencyName,
	selected = false,
	onPress,
	checkmark = true,
	visible = true,
	customIcon = null,
	iconBackground
}) => (
	<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
		<View style={styles.row}>
			<Text style={styles.text}>{currencySymbol}</Text>
			<Text style={styles.text}>{currencyName}</Text>
			{selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
			{customIcon}
		</View>
	</TouchableHighlight>
);

export default ListItem;