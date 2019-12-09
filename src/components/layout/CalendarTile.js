import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/CalendarTile';
import {withNavigation} from 'react-navigation';

export class CalendarTile extends Component {
  handleEditClicked() {
    this.props.navigation.navigate('EditPage', {data: this.props.data});
  }

  render() {
    const {date, price} = this.props.data.fields;
    return (
      <TouchableOpacity
        style={styles.calendarTile}
        onPress={() => {
          this.handleEditClicked();
        }}>
        <Text style={styles.date}> {date} </Text>
        <Text style={styles.price}> {price ? `₹${price}` : ''} </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CalendarTile);
