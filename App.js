import React from 'react';
import firebase from 'react-native-firebase';

import { AsyncStorage, LayoutAnimation } from 'react-native';

import gradients from './app/components/Gradients';

import Container from './app/components/container/Container';
import Quotes from './app/containers/quotes/Quotes';
import Question from './app/components/question/Question';
import Loading from './app/components/loading/Loading';

let database = firebase.database();

export default class App extends React.Component {

constructor() {
  super()
  this.state = {
    loaded: false,
    showQuote: true,
    quote: { text: 'Not loaded', source: 'Matthew'},
    question: null,
  }
  // AsyncStorage.clear();

  this.gradient = gradients[Math.floor(Math.random() * (gradients.length))];

  // Check library version

}

  // WRITE TO FIREBASE
  // database.ref('test').set({
  //   name: 'Matt',
  // });



componentDidMount = () => {

  const getOnlineLibraryVersion = database.ref('/pushes/version').once('value').then(function(snapshot) {
    console.log('[GetOnlineLibraryVersion:', snapshot.val())
    return snapshot.val();
  });

  const getLocalLibraryVersion = this._retrieveData('libraryVersion');

  Promise.all([getLocalLibraryVersion, getOnlineLibraryVersion]).then((results) => {

    if (results[0] !== results[1]) {
        console.log('Online version differs to local version. Online version:', results[0], ' : ', results[1]);
        return this.downloadLibrary(results[1]);
    
      } else {
        console.log('Library is up to date');
        return this.loadDailyUplift()
      }

    }).catch(this.failureCallback())

}


failureCallback() {
  console.log('something failed')
}


downloadLibrary = (newlibraryVersion) => {

  console.log('[downloadLibrary]')

  const downloadQuotes = database.ref('/pushes/quotes').once('value').then(function(snapshot) {

    // console.log('[downloadLibrary] Downloaded Quotes:', snapshot.val())
    const quoteObject = snapshot.val();
    const quoteArray = Object.values(quoteObject);    
    return quoteArray;

  });

  const storeQuotes = downloadQuotes.then((result) => this._storeData('quotes', JSON.stringify(result)), this.failureCallback)

  const storeLibraryVersion = storeQuotes.then(this._storeData('libraryVersion', newlibraryVersion.toString()), this.failureCallback)

  const loadQuoteQuestion = storeQuotes.then(this.loadDailyUplift, this.failureCallback)

    // // return this._storeData('libraryVersion', newlibraryVersion)
    // console.log('Local Version Saved');
  }


loadDailyUplift = () => {

  console.log('[loadDailyUplift]')

  const getQuotes = this._retrieveData('quotes');

  const getRandomQuote = getQuotes.then((quotesArray) => { 

    const quote = quotesArray[Math.floor(Math.random() * (quotesArray.length))];

    console.log('[loadDailyUplift] quote.source:', quote.source)
    this.setState({ quote: {text: quote.text, source: quote.source}, loaded: true });

  }) 

}


_storeData = async (key, data) => {

  console.log('[_storeData]');
  
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log('[App.js] Error saving data');
  }
}


_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(value);
      return JSON.parse(value)
    } else {
      return 0;
    }
   } catch (error) {
    console.log('[App.js] Error fetching data');
   }
}


handleTimeElapsed = () => {
  LayoutAnimation.linear();
  this.setState({showQuote : false})
}


render() {

  let body = this.state.loaded ? (

  this.state.showQuote ? 

  <Quotes quote={this.state.quote} handleTimeElapsed={this.handleTimeElapsed}/> : <Question /> 

  ) : <Loading />

    return (
      <Container gradientColours={this.gradient.colors}>
        {body}
      </Container>
    );
  }
}

