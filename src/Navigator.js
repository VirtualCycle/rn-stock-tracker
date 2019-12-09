import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StockPage from './components/containers/StockPage';

const AppNavigator = createStackNavigator({
  StockPage: {screen: StockPage},
});

export default createAppContainer(AppNavigator);
