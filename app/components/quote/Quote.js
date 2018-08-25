import React, { Component } from 'react';
import { AppRegistry, Animated, Text } from 'react-native';
import styles from './Styles';

export default class Quote extends Component {

state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0  
}

componentDidMount () {
    Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 1200,              // Make it take a while
          
        }
      ).start(); 
}

render () {

    let quote = 'Keep your eyes on the stars, and your feet on the ground.'
    let author = 'Theodore Roosevelt'
    let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                ...styles.view,
                opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
            <Text 
                style={styles.quote}
                adjustsFontSizeToFit={true}
                minimumFontScale={0.6}
                >"{quote}"</Text>
            
            <Text
                style={styles.author}
                >- {author}</Text>

            </Animated.View>
        );
    }
}

AppRegistry.registerComponent('Quote', () => Quote);