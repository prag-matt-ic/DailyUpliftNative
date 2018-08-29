import React, { Component } from 'react';
import { AppRegistry, View, Animated, Text } from 'react-native';
import styles from './Styles';

export default class Quote extends Component {

state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0  
}

componentDidMount () {
    Animated.timing(                  // Animate over time OR SPRING or DECAY
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 2300,              // Make it take a while
        }
      ).start(); 
}

render () {

    let quote = 'Keep your eyes on the stars, and your feet on the ground.'
    let author = 'Theodore Roosevelt'
    let { fadeAnim } = this.state;

        return (

            <View style={styles.view}>
                <Animated.View
                    style={{
                    // ...styles.textView, To spread existing styles
                    opacity: fadeAnim, 
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                        inputRange: [0, 0.6, 1],
                        outputRange: [-30, 0, 0]
                        }),
                    }]
                    }}
                >
                    <Text 
                        style={styles.quote}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.6}
                        >"{quote}"</Text>
                </Animated.View>
            
                <Animated.View 
                    style={{
                    opacity: fadeAnim, 
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0]
                        }),
                    }]
                    }}
                >
                    <Text
                        style={styles.author}
                        >- {author}</Text>
                </Animated.View>
            </View>
           
        );
    }
}

AppRegistry.registerComponent('Quote', () => Quote);