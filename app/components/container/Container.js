import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles';
import gradients from './Gradients';
// import colours from '../Colours';

export default class Container extends Component {

render () {

    const gradient = gradients[Math.floor(Math.random() * (gradients.length) )];
    console.log('Gradient Name:', gradient.name)

        return (
            <LinearGradient 
                colors={gradient.colors} 
                style={styles.background}
                start={{x: 0.0, y: 0.0}} end={{x: 0.95, y: 1.0}}
                // locations={[0.1,0.9]}
            >
                <View>

                    {this.props.children}

                </View>
                
            </LinearGradient>
        );
    }
}

AppRegistry.registerComponent('Container', () => Container);