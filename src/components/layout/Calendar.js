import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/Calendar';
import CalendarTile from './CalendarTile';

export class Calendar extends Component {
  render() {
    return (
      <View style={styles.calendar}>
        {this.props.data.map(item => {
          return <CalendarTile key={item.id} data={item} />;
        })}
      </View>
    );
  }
}

export default Calendar;
