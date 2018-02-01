import React, { Component } from "react";
import { StatusBar, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { ListItem, Separator } from "../components/List";

const styles = EStyleSheet.create({
	$green: "$primaryGreen",
	$blue: "$primaryBlue",
	$red: "$primaryRed",
	$pink: "$primaryPink"
});

class Themes extends Component {
	handleThemePress = color => {
		console.log("theme changed", color);
		this.props.navigation.goBack(null); 
	};

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle="default" />
				<ListItem
					text="Green"
					onPress={() => this.handleThemePress(styles.$green)}
					selected
					checkmark={false}
					iconBackground={styles.$green}
				/>
				<Separator />
				<ListItem
					text="Blue"
					onPress={() => this.handleThemePress(styles.$blue)}
					selected
					checkmark={false}
					iconBackground={styles.$blue}
				/>
				<Separator />
                <ListItem 
                    text="Red" 
                    onPress={() => this.handleThemePress(styles.$red)} 
                    selected 
                    checkmark={false} 
                    iconBackground={styles.$red} 
                />
				<Separator />
				<ListItem
					text="Pink"
					onPress={() => this.handleThemePress(styles.$pink)}
					selected
					checkmark={false}
					iconBackground={styles.$pink}
				/>
				<Separator />
			</ScrollView>
		);
	}
}

export default Themes;
