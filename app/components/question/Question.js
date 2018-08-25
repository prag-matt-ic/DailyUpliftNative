import React, { Component } from 'react';
import { AppRegistry, Animated, View, Text } from 'react-native';
import styles from './Styles';

export default class Quote extends Component {

state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0  
}

componentDidMount () {
    //   Add Animation sequence
}

render () {

    let question = 'When was the last time you set yourself a physical challenge?'
    
    let { fadeAnim } = this.state;

        return (
            <View>

            <Text style={styles.questionHeading}>Today's Question</Text>
            <Text style={styles.question}>{question}</Text>

            </View>

        );
    }
}

AppRegistry.registerComponent('Quote', () => Quote);