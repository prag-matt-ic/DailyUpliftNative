import { StyleSheet } from 'react-native';
import typography from '../Typography';

export default styles = StyleSheet.create({

    view: {
        width: '100%',
        height: '60%',
        padding: 30,
      },

    questionHeading : {
         ...typography.heading,
        fontSize: 18,
        color: '#FFF'
    },

    question: {
        ...typography.body,
        marginTop: 30,
        color: '#FFF',
    }

});