import { StyleSheet } from 'react-native';
import colours from '../Colours';

export default styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '60%',
        padding: 30,
      },

    quote: {
        fontFamily: 'Berkshire Swash',
        fontSize: 42,
        lineHeight: 55,
        letterSpacing: 0.2,
        color: colours.offWhite,
    },

    author: {
        fontFamily: 'Noto Serif',
        fontWeight: '400',
        fontSize: 24,
        color: colours.yellow,
        marginTop: 40
    }

});