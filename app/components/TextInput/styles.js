import EStyleSheet from 'react-native-extended-stylesheet'; 
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48; 
const BORDER_RADIUS = 5; 

export default EStyleSheet.create({
    $buttonBackgroundBase: '$white', 
    $buttonBackgroundModifier: 0.2,
    container: {
        backgroundColor: '$white',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        marginVertical: 10,
    },
    containerDisabled: {
        backgroundColor: '$lightGrey'
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS
    }, 
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 16,
        color: '$primaryGreen' 
    }, 
    separator: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$separator'
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText'
    }
}); 