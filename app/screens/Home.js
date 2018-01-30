import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Logo } from '../components/Logo'; 
import { InputWithButton } from '../components/TextInput'; 
import { ClearButton } from '../components/Button'; 
import { LastConverted } from '../components/Text'; 

const TEMP_BASE_CURR = 'USD'; 
const TEMP_QUOTE_CURR = 'GBP'; 
const TEMP_BASE_PRICE = '100'; 
const TEMP_QUOTE_PRICE = '80'

const TEMP_CONVERSION_RATE = 0.8; 
const TEMP_CONVERSION_DATE = new Date(); 


class Home extends Component {
    handleTextChange = (text) => {
        console.log('change text', text);
    }

    handlePressBase = () => {
        console.log('press base');
    }

    handlePressQuote = () => {
        console.log('press quote');
    }

    handleSwap = () => {
        console.log('swapped currencies');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton 
                    buttonText={TEMP_BASE_CURR}
                    onPress={this.handlePressBase}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton 
                    buttonText={TEMP_QUOTE_CURR}
                    onPress={this.handlePressQuote}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />        
                <LastConverted 
                    base={TEMP_BASE_CURR} 
                    conversionRate={TEMP_CONVERSION_RATE} 
                    date={TEMP_CONVERSION_DATE} 
                    quote={TEMP_QUOTE_CURR} 
                />
                <ClearButton text="Reverse Currencies" onPress={this.handleSwap} />
            </Container>
        )
    }
}

export default Home; 