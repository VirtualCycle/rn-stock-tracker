import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StockPage from './components/containers/StockPage';
import EditDayStockPage from './components/containers/EditDayStockPage';

const AppNavigator = createStackNavigator(
  {
    StockPage: {screen: StockPage},
    EditPage: {screen: EditDayStockPage},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 46,
      },
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },
);

export default createAppContainer(AppNavigator);
