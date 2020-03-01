import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import App from './app/screens/index';
import BookInfo from './app/screens/BookInfo';

const MainNavigator = createStackNavigator({
  Main: {
    screen: App,
  },
  Details: {
    screen: BookInfo,
  },
});

export default createAppContainer(MainNavigator);
