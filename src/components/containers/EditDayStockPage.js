import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../../styles/EditDayStockPage';
import {colors} from '../../styles/baseColors';
import {withNavigation} from 'react-navigation';
import CustomTextInput from '../CustomTextInput';
import {editStockData} from '../../DataHandler';
import {showMessage} from 'react-native-flash-message';

export class EditDayStockPage extends Component {
  state = {
    price: this.props.navigation.getParam('data').fields.price,
    data: this.props.navigation.getParam('data'),
  };

  static navigationOptions = {
    headerTitle: 'Edit Stock Price',
    headerStyle: {
      backgroundColor: colors.brandRed,
      height: 46,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  };
  handleSubmit = async () => {
    try {
      let res = await editStockData(this.state.price, this.state.data);
      showMessage({
        message: 'Success',
        description: 'Stock Price Updated!',
        type: 'success',
      });
      this.props.navigation.pop();
    } catch (err) {
      showMessage({
        message: 'Error',
        description: `Couldn't update Stock Price`,
        type: 'danger',
      });
    }
  };
  onChangePrice(text) {
    const cleanNumber = text.replace(/[^0-9]/g, '');
    this.setState({price: cleanNumber});
  }
  render() {
    const {fields} = this.props.navigation.getParam('data');
    return (
      <View style={styles.container}>
        <Text style={styles.date}> {`June ${fields.date}`} </Text>
        <CustomTextInput
          style={styles.textInput}
          keyboardType="phone-pad"
          value={this.state.price}
          onChangeText={text => {
            this.onChangePrice(text);
          }}
        />
        <Button
          title="Submit"
          style={styles.submitButton}
          onPress={() => {
            this.handleSubmit();
          }}
        />
      </View>
    );
  }
}

export default withNavigation(EditDayStockPage);
