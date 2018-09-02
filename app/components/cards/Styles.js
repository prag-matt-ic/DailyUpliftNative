import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },

  card1: {
    backgroundColor: "grey",
    width: '70%',
    height: '60%',
    borderRadius: 10,
    zIndex: 2
  },

  card2: {
    backgroundColor: "black",
    width: '70%',
    height: '60%',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1,
    shadowColor: '#454545',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  }

});
