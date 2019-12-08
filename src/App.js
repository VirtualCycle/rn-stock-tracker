import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/layout/Header';
import {colors} from './styles/baseColors';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#bf4345" />
        <SafeAreaView styles={styles.container}>
          <Header />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
});

export default App;
