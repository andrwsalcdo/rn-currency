import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";
import Navigator from "./config/routes";
import store from "./config/store";

EStyleSheet.build({
	$primaryGreen: "#024b30",
	$primaryPurple: "#323299",
	$primaryRed: "#990000",
	$primaryPink: "#FF69B4",
	$white: "#ffffff",
	$separator: "#E2E2E2",
	$inputText: "#545454",
	$lightGrey: "#f0f0f0",
	$darkText: "#343434"
	// $outline: 1
});

export default () => (
	<Provider store={store}>
		<Navigator />
	</Provider>
);
