import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { connect } from 'react-redux'; 
import { ListItem, Separator } from '../components/List'; 
import currencies from '../data/currencies'; 

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'; 

const TEMP_CURRENT_CURR = "CAD"; 

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
        return (    
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURR}
                            onPress={() => this.handlePress(item)}    
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

export default connect()(CurrencyList);