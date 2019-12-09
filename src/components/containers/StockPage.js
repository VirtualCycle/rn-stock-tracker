import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../layout/Header';
import Calendar from '../layout/Calendar';
import {getStockData} from '../../DataHandler';

export class StockPage extends Component {
  state = {
    stockData: [],
  };
  static navigationOptions = {
    headerTitle: () => <Header title="Stocks - June 2019" />,
  };

  async componentDidMount() {
    await this.getData();
    console.log(this.state.stockData);
  }

  async getData() {
    let data = await getStockData();
    this.setState({stockData: [...data]});
  }

  render() {
    return (
      <View style={styles.StockPage}>
        <Calendar data={this.state.stockData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StockPage: {flex: 1, flexDirection: 'column', backgroundColor: 'green'},
});

export default StockPage;
