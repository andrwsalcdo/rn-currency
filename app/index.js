import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// import Home from "./screens/Home";
// import CurrencyList from './screens/CurrencyList';
// import Options from './screens/Options';
import Themes from "./screens/Themes";

EStyleSheet.build({
	$primaryGreen: "#024b30",
	$primaryBlue: "#323299",
	$primaryRed: "#663333",
	$primaryPink: "#FF69B4",

	$white: "#ffffff",
	$separator: "#E2E2E2",
	$inputText: "#545454",
	$lightGrey: "#f0f0f0",
	$darkText: "#343434"
	// $outline: 1
});

// export default () => <Home />;
// export default () => <CurrencyList />;
// export default () => <Options />;
export default () => <Themes />;
