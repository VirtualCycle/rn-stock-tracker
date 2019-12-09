import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/CalendarTile';

export class CalendarTile extends Component {
  render() {
    const {date, price} = this.props.data.fields;
    return (
      <TouchableOpacity style={styles.calendarTile}>
        <Text style={styles.date}> {date} </Text>
        <Text style={styles.price}> {price} </Text>
      </TouchableOpacity>
    );
  }
}

export default CalendarTile;
