import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {colors} from '../styles/baseColors';
import {styles} from '../styles/CustomTextInput';

export class CustomTextInput extends Component {
  state = {
    isFocused: false,
  };
  handleFocus = event => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  handleBlur = event => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };
  render() {
    const {isFocused} = this.state;
    const {onFocus, onBlur, placeholder, ...otherProps} = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        selectionColor={colors.blue}
        underlineColorAndroid={colors.blue}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={styles.textInput}
        {...otherProps}
      />
    );
  }
}

export default CustomTextInput;
