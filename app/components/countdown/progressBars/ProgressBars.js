import React, { Component } from 'react';
import { AppRegistry, ProgressViewIOS } from 'react-native';

import colours from '../../Colours';

export default class ProgressBars extends Component {

constructor(props) {
    super(props)
    this.state = {
        iosProgress: this.props.iosProgress
    }
}

componentWillUpdate() {
    this.setState({iosProgress: this.props.iosProgress});
}

componentWillReceiveProps() {
    
}

render () {

    console.log('this.props.iosProgress: ', this.props.iosProgress,
    'this.state.iosProgress: ', this.state.iosProgress
);

        return (
            <React.Fragment>
                
                <ProgressViewIOS 
                    progress={this.state.iosProgress} 
                    progressTintColor={colours.dark}
                    trackTintColor={'#000'}
                    style={{width:'80%', height: 10}}/>

            </React.Fragment>
        );
    }
}

AppRegistry.registerComponent('ProgressBars', () => ProgressBars);
