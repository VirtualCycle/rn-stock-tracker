import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../layout/Header';
import Calendar from '../layout/Calendar';

export class StockPage extends Component {
  static navigationOptions = {
    headerTitle: () => <Header title="Stocks - June 2019" />,
  };

  render() {
    return (
      <View style={styles.StockPage}>
        <Calendar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StockPage: {flex: 1, flexDirection: 'column', backgroundColor: 'green'},
});

export default StockPage;
