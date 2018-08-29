import React from 'react';
import { AppRegistry, View } from 'react-native';

import Quote from '../../components/quote/Quote';
import Countdown from '../../components/countdown/Countdown';

import styles from './Styles';

export default class Quotes extends React.Component {
  
  static navigationOptions = {
    title: 'Quotes',
  };

  handleTimeElapsed = () => {
    this.props.navigation.navigate('Question');
  }
  
  render() {
      return (
        <View style={styles.view}>
          <Quote /> 
          <Countdown 
            onTimeElapsed={this.handleTimeElapsed} 
          />
       </View> 
      );
    }
  }
  
  AppRegistry.registerComponent('Quotes', () => Quotes);
  