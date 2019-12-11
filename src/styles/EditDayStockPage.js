import {StyleSheet} from 'react-native';
import {colors} from '../styles/baseColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lightblue,
  },
  priceInput: {
    borderBottomWidth: 1,
  },
  submitButton: {
    padding: 50,
    width: '50%',
  },
  textInput: {
    width: '50%',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },
  date: {
    fontSize: 20,
    padding: 20,
  },
});
