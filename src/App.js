import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
// import Header from './components/layout/Header';
import {colors} from './styles/baseColors';
import AppNavigator from './Navigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#bf4345" />
        <AppNavigator />
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
