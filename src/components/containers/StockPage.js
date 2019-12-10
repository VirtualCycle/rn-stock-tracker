import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../layout/Header';
import Calendar from '../layout/Calendar';
import ReportBlock from '../layout/ReportBlock';
import {getStockData} from '../../DataHandler';

export class StockPage extends Component {
  state = {
    stockData: [],
  };
  static navigationOptions = {
    headerTitle: () => <Header title="Stocks - June 2019" />,
  };

  componentWillUnmount() {
    this._sub.remove();
  }

  _componentFocused = async () => {
    await this.getData();
  };

  async componentDidMount() {
    await this.getData();
    this._componentFocused();

    this._sub = this.props.navigation.addListener(
      'didFocus',
      this._componentFocused,
    );
  }

  async getData() {
    let data = await getStockData();
    this.setState({stockData: [...data]});
  }

  render() {
    return (
      <View style={styles.StockPage}>
        <Calendar data={this.state.stockData} />
        <ReportBlock data={this.state.stockData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StockPage: {flex: 1, flexDirection: 'column'},
});

export default StockPage;
