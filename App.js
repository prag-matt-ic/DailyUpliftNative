import React, {Component} from 'react';

// import { LayoutAnimation } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Quotes from './app/containers/quotes/Quotes';
import Container from './app/components/container/Container';
import Question from './app/components/question/Question';

// const UpliftStack = createStackNavigator(
//   {
//     Quotes: Quotes,
//     Question: Question,
//   },
//   {
//     initialRouteName: 'Quotes',
//     headerMode: 'none',
//     navigationOptions: {
//     // headerStyle: {
//     // backgroundColor: 'rgba(0,0,0,0.2)',
//     // },
//     // headerTintColor: '#fff',
//     // headerTitleStyle: {
//     //   fontWeight: 'bold',
//     // },
//   }
//   }
// );

// const SettingsStack = createStackNavigator(
//   {
//     Default: Quotes
//   },
//   {
//     initialRouteName: 'Default',
//     navigationOptions: {
//     headerStyle: {
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }
//   }
// );

// const TabBar = createBottomTabNavigator(

//   {
//    Uplift: UpliftStack,
//    Settings: SettingsStack
//   },
//   {
//     initialRouteName: 'Uplift',
//     tabBarOptions: {
//       activeTintColor: '#e91e63',
//       labelStyle: {
//         fontSize: 12,
//       },
//       style: {
//         backgroundColor: 'blue',
//       },
//   }
// }
// );



export default class App extends Component {

render() {
    return (
      // <Container>
        <TabBar />
      // </Container>
  
    );
  }
}

