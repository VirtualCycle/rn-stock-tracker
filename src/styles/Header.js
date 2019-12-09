import {StyleSheet} from 'react-native';
import {colors} from './baseColors';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
