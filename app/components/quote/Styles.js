import { StyleSheet } from 'react-native';
import typography from '../Typography';

export default styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '60%',
        padding: 30,
      },

    quote: {
        ...typography.heading,
        color: '#FFF',
        fontSize: 50,
    },

    author: {
        ...typography.bold,
        fontSize: 24,
        color: '#FFF',
        marginTop: 40
    }

});