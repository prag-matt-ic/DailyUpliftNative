import React, { Component } from 'react';
import { AppRegistry, Animated, View, Text } from 'react-native';
import styles from './Styles';

export default class Quote extends Component {

state = {
    fadeAnim: new Animated.Value(0), 
    positionAnim:  new Animated.Value(0),
}

componentDidMount () {
  Animated.sequence([
    Animated.timing(
        this.state.fadeAnim,       
        {
          toValue: 1,               
          duration: 350,            
        }
      ),
      Animated.timing(
        this.state.positionAnim,       
        {
          toValue: 1,               
          duration: 1000,            
        }
      ) 
  ]).start();
}

render () {

    let question = 'When was the last time you set yourself a physical challenge?'
    
    let { fadeAnim } = this.state;

        return (
            <Animated.View
                    style={{
                    ...styles.view,
                    opacity: fadeAnim, 
                    transform: [{
                        translateY: this.state.positionAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0]
                        }),
                    }]
                    }}
                >
                
                <Text style={styles.questionHeading}>Today's Question</Text>
                <Text style={styles.question}>{question}</Text>

            </Animated.View>

        );
    }
}

AppRegistry.registerComponent('Quote', () => Quote);