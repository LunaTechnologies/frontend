import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import SubmitButtonStyles from './SubmitButtonStyles';

const SubmitButton = props => {
  return (
    <TouchableOpacity style={SubmitButtonStyles.background}>
      <Text style={SubmitButtonStyles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
