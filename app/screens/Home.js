import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Button";
import { LastConverted } from "../components/Text";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

const TEMP_BASE_CURR = "USD";
const TEMP_QUOTE_CURR = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "80";

const TEMP_CONVERSION_RATE = 0.8;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
	handlePressOptions = () => {
		this.props.navigation.navigate("Options");
	};

	handleTextChange = amount => {
		// this.props.dispatch
		console.log(changeCurrencyAmount(amount));
	};

	handlePressBase = () => {
		this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
	};

	handlePressQuote = () => {
		this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
	};

	handleSwap = () => {
		// this.props.dispatch
		console.log(swapCurrency());
	};

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header onPress={this.handlePressOptions} />
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton
						buttonText={TEMP_BASE_CURR}
						onPress={this.handlePressBase}
						defaultValue={TEMP_BASE_PRICE}
						keyboardType="numeric"
						onChangeText={this.handleTextChange}
					/>
					<InputWithButton buttonText={TEMP_QUOTE_CURR} onPress={this.handlePressQuote} editable={false} value={TEMP_QUOTE_PRICE} />
					<LastConverted base={TEMP_BASE_CURR} conversionRate={TEMP_CONVERSION_RATE} date={TEMP_CONVERSION_DATE} quote={TEMP_QUOTE_CURR} />
					<ClearButton text="Reverse Currencies" onPress={this.handleSwap} />
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

export default Home;
