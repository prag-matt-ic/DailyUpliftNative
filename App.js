import React from 'react';
import firebase from 'react-native-firebase';

import { AsyncStorage, LayoutAnimation } from 'react-native';

import gradients from './app/components/Gradients';

import Container from './app/components/container/Container';
import Quotes from './app/containers/quotes/Quotes';
import Question from './app/components/question/Question';

var database = firebase.database();

export default class App extends React.Component {

constructor() {
  super()
  this.state = {
    showQuotes: true,
    quote: null,
    question: null,
  }
  this.gradient = gradients[Math.floor(Math.random() * (gradients.length))];

  // Check library version

}

  // WRITE TO FIREBASE
  // database.ref('test').set({
  //   name: 'Matt',
  // });
  

componentDidMount = () => {

  this.getLocalLibraryVersion().then((version) => {

        this.getOnlineLibraryVersion().then((onlineVersion) => {

        if (version !== onlineVersion) {

                // DOWNLOAD LIBRARY
                console.log('Online version differs to local version');

        } else {
          // MATCHES - LOAD QUOTE AND QUESTION
          console.log('Online version matches local version');
        }

        }).catch((error) => {
          console.log('Promise is rejected with error: ' + error);
        })
    

    }).catch((error) => {

    //this callback is executed when your Promise is rejected
    console.log('Promise is rejected with error: ' + error);

  }); 

}


getLocalLibraryVersion = async () => {

  try {
      const value = await AsyncStorage.getItem('libraryVersion');
      
      if (value !== null) {

        console.log('Library Version:', value);
        return value

      } else {

        console.log('Library Version:', 0);
        return 0
        // Update Library

      }

     } catch (error) {
      console.log('[App.js] Error fetching data');
     }

    }


    getOnlineLibraryVersion = () => {

    database.ref('/pushes/version').once('value').then(function(snapshot) {

      console.log('[GetOnlineLibraryVersion:', snapshot.val())

      return snapshot.val();
  
    });
}




// Download data

// UPDATE LIBRARY ON DEVICE
_fetchQuestions = async () => {

  database.ref('/pushes/questions').once('value').then(function(snapshot) {

    const questions = snapshot.val();

    // TO DO - ADD TO PROMISE
    _storeData('questions', questions)

  });
}




_storeData = async (key, data) => {

// const quotes = [ 
//   {text: 'Keep your head up, keep your heart strong', author: 'Ben Howard'}, 
//   {text: 'I am a mountain. You are the sea.', author: 'Biffy Clyro'}, 
//   {text: 'All the things you said, running through my head, running through my head', author: 'Uknown'}, 
//   {text: 'How can it be that the curtain is closing on me', author: 'Eminem'}
// ]

  try {
    await AsyncStorage.setItem(key, JSON.stringify(data) );
  } catch (error) {
    console.log('[App.js] Error saving data');
  }
}


_retrieveData = async () => {
  try {

    const value = await AsyncStorage.getItem('quotes');
    if (value !== null) {
      // We have data!!

      const quotes = JSON.parse(value)
      console.log(quotes[0]);
    }
   } catch (error) {
    console.log('[App.js] Error fetching data');
   }
}



handleTimeElapsed = () => {
  LayoutAnimation.linear();
  this.setState({showQuotes : false})
  this._retrieveData();
}


render() {

  let content = this.state.showQuotes ? <Quotes handleTimeElapsed={this.handleTimeElapsed}/> : <Question />;

    return (
      <Container gradientColours={this.gradient.colors}>
        {content}
      </Container>
    );
  }
}

