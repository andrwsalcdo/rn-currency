import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Button";
import { LastConverted } from "../components/Text";

import { swapCurrency, changeCurrencyAmount, getInitialConversion } from "../actions/currencies";

class Home extends Component {
	
	componentWillMount () {
		this.props.dispatch(getInitialConversion()); 
	}
	
	handlePressOptions = () => {
		this.props.navigation.navigate("Options");
	};

	handleTextChange = amount => {
		this.props.dispatch(changeCurrencyAmount(amount));
	};

	handlePressBase = () => {
		this.props.navigation.navigate("CurrencyList", { title: "Base Currency", type: "base" });
	};

	handlePressQuote = () => {
		this.props.navigation.navigate("CurrencyList", { title: "Quote Currency", type: "quote" });
	};

	handleSwap = () => {
		this.props.dispatch(swapCurrency());
	};

	render() {
		let quotePrice = (this.props.conversionRate * this.props.amount).toFixed(2);

		if (this.props.isFetching) {
			quotePrice = "...";
		}

		return (
			<Container backgroundColor={this.props.primaryColor}>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header onPress={this.handlePressOptions} />
				<KeyboardAvoidingView behavior="padding">
					<Logo tintColor={this.props.primaryColor} />
					<InputWithButton
						buttonText={this.props.baseCurrency}
						onPress={this.handlePressBase}
						defaultValue={this.props.amount.toString()}
						keyboardType="numeric"
						onChangeText={this.handleTextChange}
						textColor={this.props.primaryColor}
					/>
					<InputWithButton
						buttonText={this.props.quoteCurrency}
						onPress={this.handlePressQuote}
						editable={false}
						value={quotePrice}
						textColor={this.props.primaryColor}
					/>
					<LastConverted
						base={this.props.baseCurrency}
						conversionRate={this.props.conversionRate}
						date={this.props.lastConvertedDate}
						quote={this.props.quoteCurrency}
					/>
					<ClearButton text="Reverse Currencies" onPress={this.handleSwap} />
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

const mapStateToProps = state => {
	const baseCurrency = state.currencies.baseCurrency;
	const quoteCurrency = state.currencies.quoteCurrency;
	const conversionSelector = state.currencies.conversions[baseCurrency] || {};
	const rates = conversionSelector.rates || {};
	return {
		baseCurrency,
		quoteCurrency,
		amount: state.currencies.amount,
		conversionRate: rates[quoteCurrency] || 0,
		isFetching: conversionSelector.isFetching,
		lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
		primaryColor: state.theme.primaryColor
	};
};

export default connect(mapStateToProps)(Home);
