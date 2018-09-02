import React from 'react';

import {  AsyncStorage, LayoutAnimation } from 'react-native';

import Cards from './app/components/cards/Cards';


export default class App extends React.Component {

constructor() {
  super()
  this.state = {

  }
}

componentDidMount = () => {


}


render() {

    return (
      <Cards />
    );
  }

}

AppRegistry.registerComponent('App', () => App);

