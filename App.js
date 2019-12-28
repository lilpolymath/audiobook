import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Margin from './app/screens/About';
import App from './app/screens/index';
import Book from './app/screens/BookOne';
import BookTwo from './app/screens/BookTwo';
import AddButton from './app/screens/AddButton';

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: App,
      navigationOptions: {
        tabBarIcon: () => <Icon name="home" size={22} color="black" />,
      },
    },
    Details: {
      screen: Book,
      navigationOptions: {
        tabBarIcon: () => <Icon name="behance" size={22} color="black" />,
      },
    },
    AddButton: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },
    Test: {
      screen: Margin,
      navigationOptions: {
        tabBarIcon: () => <Icon name="user" size={22} color="black" />,
      },
    },
    Book: {
      screen: BookTwo,
      navigationOptions: {
        tabBarIcon: () => <Icon name="dollar-sign" size={22} color="black" />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: 'whitesmoke',
    },
    initialRouteName: 'Main',
  },
);

// const TestStack = createStackNavigator({
//   Test: Margin,
// });

// const AppNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: MainNavigator,
//       navigationOptions: {
//         tabBarIcon: () => <Icon name="heartbeat" size={24} color="red" />,
//       },
//     },
//     Test: TestStack,
//   },
//   {
//     tabBarOptions: {
//       showLabel: false,
//     },
//     initialRouteName: 'Home',
//   },
// );
// const AppContainer =

export default createAppContainer(MainNavigator);
