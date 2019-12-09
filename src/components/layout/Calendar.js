import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/Calendar';
import CalendarTile from './CalendarTile';

const data = [
  {date: 1},
  {date: 2},
  {date: 3},
  {date: 4},
  {date: 5},
  {date: 6},
  {date: 7},
  {date: 8},
  {date: 9},
];

export class Calendar extends Component {
  render() {
    return (
      <View style={styles.calendar}>
        {data.map(item => {
          return <CalendarTile key={item.date} date={item.date} />;
        })}
      </View>
    );
  }
}

export default Calendar;
