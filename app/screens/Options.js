import React, { Component } from "react";
import { StatusBar, ScrollView, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ListItem, Separator } from "../components/List";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
	handleThemesPress = () => {
		this.props.navigation.navigate('Themes'); 
	};

	handleSitePress = () => {
		Linking.openURL('https://fixer.io').catch(() => alert('sorry, an error occured'));  
	};

	render() {
		return (
			<ScrollView>
				<StatusBar translucent={false} barStyle="default" />
				<ListItem
					text="Themes"
					onPress={this.handleThemesPress}
					customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}
				/>
				<Separator />
				<ListItem
					text="Fixer.io"
					onPress={this.handleSitePress}
					customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
				/>
				<Separator />
			</ScrollView>
		);
	}
}

export default Options;
