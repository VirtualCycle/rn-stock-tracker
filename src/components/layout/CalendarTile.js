import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/CalendarTile';

export class CalendarTile extends Component {
  render() {
    return (
      <View style={styles.calendarTile}>
        <Text> {this.props.date} </Text>
      </View>
    );
  }
}

export default CalendarTile;
