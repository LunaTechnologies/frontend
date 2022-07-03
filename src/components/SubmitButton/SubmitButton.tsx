import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import SubmitButtonStyles from './SubmitButtonStyles';

interface Props {
  text: string;
  onPress: () => void;
}

const SubmitButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={SubmitButtonStyles.background}
      onPress={props.onPress}>
      <Text style={SubmitButtonStyles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
