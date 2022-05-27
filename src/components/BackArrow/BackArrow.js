import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BackArrowStyles from './BackArrowStyles';

const BackArrow = ({ color, handler }) => {
  return (
    <TouchableOpacity style={BackArrowStyles.global} onPress={handler}>
      <Icon name="arrowleft" style={{ ...BackArrowStyles.arrow, color }} />
    </TouchableOpacity>
  );
};

export default BackArrow;
