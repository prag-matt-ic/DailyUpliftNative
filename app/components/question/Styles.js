import { StyleSheet } from 'react-native';
import colours from '../Colours';

export default styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '60%',
        padding: 30,
      },

    questionHeading : {
        fontFamily: 'Noto Serif',
        fontSize: 18,
        color: colours.yellow
    },

    question: {
        fontFamily: 'Noto Serif',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 28,
        letterSpacing: 0.2,
        marginTop: 30,
        color: colours.offWhite,
    }

});