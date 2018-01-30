import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';  

const imageWidth = Dimensions.get('window').width / 2; 

export default EStyleSheet.create({
    $largeContainer: imageWidth,
    $largeImage: imageWidth / 2,
    $smallContainer: imageWidth / 2,
    $smallImage: imageWidth / 4,
    container: {
        alignItems: 'center'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeContainer',
        height: '$largeContainer'
    },
    logo: {
        width: '$largeImage',
    },
    text: {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        fontWeight: '600'
    }
}); 