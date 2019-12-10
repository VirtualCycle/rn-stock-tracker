import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/ReportBlock';
import {LineChart, XAxis, YAxis, Grid} from 'react-native-svg-charts';
import {colors} from '../../styles/baseColors';

export class ReportBlock extends Component {
  getFields(data) {
    return data
      .map(item => item.fields)
      .filter(item => (parseInt(item.price) ? true : false));
  }
  transformData(data) {
    let newData = this.getFields(data);
    let dates = newData.map(field => parseInt(field.date));
    let prices = newData.map(field => parseInt(field.price));
    return {prices, dates, filteredData: newData};
  }

  maxProfit(prices, dates) {
    let profit = 0;

    let buyDateIndex = null;
    let sellDateIndex = null;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i; j < prices.length; j++) {
        if (prices[j] > prices[i] && prices[j] - prices[i] > profit) {
          profit = prices[j] - prices[i];
          buyDateIndex = i;
          sellDateIndex = j;
        }
      }
    }
    return {profit, min: dates[buyDateIndex], max: dates[sellDateIndex]};
  }

  generateBuySellString = (profit, min, max) => {
    if (profit) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{`Buy on ${min.fullDate}`}</Text>
          <Text>{`Sell on ${max.fullDate}`}</Text>
        </View>
      );
    }
  };

  render() {
    const {prices, dates, filteredData} = this.transformData(this.props.data);
    const {max, min, profit} = this.maxProfit(prices, filteredData);

    const YContentInset = {top: 20, bottom: 20};

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, alignSelf: 'center'}}>
          {profit
            ? `Make profit of ₹${profit * 10} by buying 10 stocks`
            : 'No possible profit this month'}
        </Text>
        <View style={{flexDirection: 'column', paddingHorizontal: 5}}>
          <View
            style={{
              height: 200,
              flexDirection: 'row',
            }}>
            <YAxis
              data={prices}
              contentInset={YContentInset}
              svg={{
                fill: 'grey',
                fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={value => `₹${value}`}
            />
            <LineChart
              style={{
                flex: 1,
                height: 200,
                paddingHorizontal: 10,
                marginVertical: 0,
              }}
              data={prices}
              svg={{stroke: colors.steelblue, strokeWidth: 2}}
              contentInset={{top: 20, bottom: 20}}>
              <Grid />
            </LineChart>
          </View>
          <XAxis
            style={{marginHorizontal: 10, marginVertical: -10}}
            data={dates}
            numberOfTicks={10}
            formatLabel={value => value}
            contentInset={{left: 30, right: 10}}
            svg={{fontSize: 10, fill: 'black'}}
          />
        </View>

        {this.generateBuySellString(profit, min, max)}
      </View>
    );
  }
}

export default ReportBlock;
