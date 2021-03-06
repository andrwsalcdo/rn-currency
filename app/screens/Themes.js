import React, { Component } from "react";
import { StatusBar, ScrollView } from "react-native";
import { connect } from 'react-redux'; 
import EStyleSheet from "react-native-extended-stylesheet";
import { ListItem, Separator } from "../components/List";

import { changePrimaryColor } from '../actions/theme'; 

const styles = EStyleSheet.create({
	$green: "$primaryGreen",
	$purple: "$primaryPurple",
	$red: "$primaryRed",
	$pink: "$primaryPink"
});

class Themes extends Component {
	handleThemePress = color => {
		this.props.dispatch(changePrimaryColor(color)); 
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
					text="Purple"
					onPress={() => this.handleThemePress(styles.$purple)}
					selected
					checkmark={false}
					iconBackground={styles.$purple}
				/>
				<Separator />
                <ListItem 
                    text="Dark Red" 
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



export default connect()(Themes);
