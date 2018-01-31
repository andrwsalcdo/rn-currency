import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";

import { ListItem, Separator } from '../components/List'; 
import currencies from '../data/currencies'; 

const TEMP_CURRENT_CURR = "CAD"; 

class CurrencyList extends Component {
    handlePress = () => {
        console.log('list item press');
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
                            onPress={this.handlePress}    
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

export default CurrencyList;