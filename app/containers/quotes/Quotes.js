import React from 'react';
import { AppRegistry, View } from 'react-native';
import Quote from '../../components/quote/Quote';
import Countdown from '../../components/countdown/Countdown';
import styles from './Styles';

export default class Quotes extends React.Component {
    
  render() {
      return (
        <View style={styles.view}>
          <Quote quote={this.props.quote}/> 
          <Countdown 
            onTimeElapsed={this.props.handleTimeElapsed} 
          />
       </View> 
      );
    }
  }
  
  AppRegistry.registerComponent('Quotes', () => Quotes);
  