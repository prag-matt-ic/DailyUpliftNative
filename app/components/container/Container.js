import React from 'react';
import { AppRegistry, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles';


export default class Container extends React.Component {

render () {
        return (
            <LinearGradient 
                colors={this.props.gradientColours} 
                style={styles.background}
                start={{x: 0.0, y: 0.0}} end={{x: 0.95, y: 1.0}}
                // locations={[0.1,0.9]}
            >
                <View style={styles.view}>

                    {this.props.children}

                </View>
                
            </LinearGradient>
        );
    }
}

AppRegistry.registerComponent('Container', () => Container);