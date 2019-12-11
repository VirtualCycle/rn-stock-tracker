import {StyleSheet} from 'react-native';
import {colors} from '../styles/baseColors';

export const styles = StyleSheet.create({
  calendarTile: {
    backgroundColor: colors.steelblue,
    width: '16.66%',
    height: 85,
    borderColor: 'darkblue',
    borderWidth: 0.2,
  },
  date: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1d3549',
  },
  price: {
    color: '#FBEEA8',
    fontSize: 13,
    fontWeight: '700',
  },
});
