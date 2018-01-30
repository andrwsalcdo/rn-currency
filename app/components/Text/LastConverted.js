import React from "react";
import { Text } from "react-native";
import moment from 'moment'; 

import styles from './styles';

const LastConverted = ({ base, conversionRate, date, quote }) => (
    <Text style={styles.text}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
)

export default LastConverted;