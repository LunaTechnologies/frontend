import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ErrorTextStyles';

const ErrorText = props => {
  return (
    <View style={styles.errorField}>
      <Text style={styles.errorField.errorText}>{props.text}</Text>
    </View>
  );
};

export default ErrorText;
