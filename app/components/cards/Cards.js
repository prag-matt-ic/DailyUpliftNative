import React from 'react';
import { AppRegistry, View, PanResponder, Animated, SafeAreaView } from 'react-native';

import styles from './Styles';

export default class Cards extends React.Component {

constructor() {
    super()
    
    this.state = {
        pan: new Animated.ValueXY()
    }

    this._animatedValueX = 0;
    this._animatedValueY = 0; 
    this.state.pan.x.addListener((value) => this._animatedValueX = value.value);
    this.state.pan.y.addListener((value) => this._animatedValueY = value.value);


    this.panResponder = PanResponder.create({

        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (e, gestureState) => {
            this.state.pan.setOffset({x: this._animatedValueX, y: this._animatedValueY});
            this.state.pan.setValue({x: 0, y: 0}); //Initial value
          },

        onPanResponderMove: 
            // console.log('Gesture State DX:',gestureState.dx, ' DY:',gestureState.dy),
            Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y}
          ]),

          onPanResponderRelease: (evt, gestureState) => {

            // console.log('Gesture State X:',gestureState.x0, ' Y:',gestureState.y0),
            if (gestureState.dx > 120 || gestureState.dx < -120) {
                return console.log('SWITCH TO NEXT CARD. Gesture State DX:',gestureState.dx)
            }
              
            Animated.spring(this.state.pan, {
                toValue: 0
              }).start();
            // this.state.pan.flattenOffset(); // Flatten the offset so it resets the default positioning
          }
      
    });
   
}

componentWillUnmount() {
    this.state.pan.x.removeAllListeners();  
    this.state.pan.y.removeAllListeners();
}

render () {

    const panStyle = {
        // transform: this.state.pan.getTranslateTransform(), 
        transform: [
            { translateX: this.state.pan.x },
            { translateY: this.state.pan.y },
            { rotate: this.state.pan.x.interpolate({inputRange: [-100, 0, 100], outputRange: ['-10deg', '0deg', '10deg']}) }
        ],
        opacity: this.state.pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.7, 1, 0.7]}), 
      }

        return (
            <View style={styles.container}>


                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[panStyle, styles.card1]}
                    >

                    {/* Card Contents */}

                </Animated.View>


                <View style={styles.card2}>

                </View>


            </View>
        );
    }
}


AppRegistry.registerComponent('Cards', () => Cards);