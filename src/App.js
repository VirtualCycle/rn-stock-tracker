import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {colors} from './styles/baseColors';
import AppNavigator from './Navigator';
import FlashMessage from 'react-native-flash-message';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#bf4345" />
        <AppNavigator />
        <FlashMessage position="top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
