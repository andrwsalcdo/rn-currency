import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
	$primaryGreen: "#024b30"
});

export default () => <Home />;
