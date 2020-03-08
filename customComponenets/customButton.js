import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.callback} style={this.props.styles}>
        <Text style={{ color: 'white', textAlign: 'center', alignContent: 'center', fontSize: 16 }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default CustomButton;

