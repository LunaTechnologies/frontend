import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from './ErrorTextStyles';

const ErrorText = props => {
  return (
    <View style={styles.errorField}>
      <Text
        style={{
          ...styles.errorField.errorText,
          ...{ color: props.success ? colors.lightGreen : colors.red },
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default ErrorText;
