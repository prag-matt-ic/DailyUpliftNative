import React, {Component} from 'react';
import { LayoutAnimation } from 'react-native';

import Container from './app/components/container/Container';
import Quote from './app/components/quote/Quote';
import Countdown from './app/components/countdown/Countdown';

import Question from './app/components/question/Question';

export default class App extends Component {

constructor() {
  super() 
  this.state = {
    showQuote: true
  }
}

timeElapsedHandler = () => {
  this.setState({showQuote:false});
}


render() {
    return (
        <Container>

          {this.state.showQuote ? (
          
          <React.Fragment>
              <Quote /> 
              <Countdown 
                onTimeElapsed={this.timeElapsedHandler} 
              />
          </React.Fragment> 
          
          ): <Question />}
          
        </Container>
    );
  }
}
