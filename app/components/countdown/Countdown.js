import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
// import ProgressBars from './progressBars/ProgressBars';

import colours from '../Colours';

export default class Countdown extends Component {

constructor(props) {
    super(props)
    // this.iOSProgress = 1.00;
}

handleTick = (secondsRemaining) => {
    // this.iOSProgress = ((secondsRemaining/1000 / 60)).toFixed(2)
    // console.log('This.iOSProgress value: ', this.iOSProgress);
}

render () {

        return (
            <React.Fragment>
                
                 <TimerCountdown
                    initialSecondsRemaining={1000 * 10}
                    onTick={secondsRemaining => this.handleTick(secondsRemaining)}
                    interval={1000}
                    onTimeElapsed={this.props.onTimeElapsed}
                    style={{ fontSize: 18, color: '#FFF'}}
                />

             {/* <ProgressBars 
                iosProgress={this.iOSProgress}
             /> */}

            </React.Fragment>
           
        );
    }
}

AppRegistry.registerComponent('Countdown', () => Countdown);

