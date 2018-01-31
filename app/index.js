import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

// import Home from "./screens/Home";
// import CurrencyList from './screens/CurrencyList'; 
import Options from './screens/Options'; 

EStyleSheet.build({
	$primaryGreen: "#024b30",
	$white: "#ffffff",
	$separator: '#E2E2E2',
	$inputText: '#545454',
	$lightGrey: '#f0f0f0',
	$darkText: '#343434',
	// $outline: 1
});

// export default () => <Home />;
// export default () => <CurrencyList />;
export default () => <Options />;


