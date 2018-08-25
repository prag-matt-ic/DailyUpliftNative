import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles';
// import gradients from './Gradients';
import colours from '../Colours';

export default class Container extends Component {

render () {

    // TO DO: Logic to pick random gradient

        return (
            <LinearGradient 
                colors={[colours.dark, '#000']} 
                style={styles.background}
                start={{x: 0.0, y: 0.0}} end={{x: 0.9, y: 1.0}}
                // locations={[0.1,0.9]}
            >
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </LinearGradient>
        );
    }
}

AppRegistry.registerComponent('Container', () => Container);