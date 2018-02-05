import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { connect } from 'react-redux'; 
import { ListItem, Separator } from '../components/List'; 
import currencies from '../data/currencies'; 

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'; 


class CurrencyList extends Component {
    handlePress = (currency) => {
        const { type } = this.props.navigation.state.params; 
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency))
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        this.props.navigation.goBack(null); 
    }

    render() {
        const { currentCurrency, primaryColor } = this.props; 
        return (    
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem 
                            text={item}
                            selected={item === currentCurrency}
                            onPress={() => this.handlePress(item)}  
                            iconBackground={primaryColor}  
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    currentCurrency: ownProps.navigation.state.params.type === 'base' ? state.currencies.baseCurrency : state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor, 
})

export default connect(mapStateToProps)(CurrencyList);