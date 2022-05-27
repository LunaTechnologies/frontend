import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BackArrowStyles from './BackArrowStyles';

const BackArrow = () => {
  return (
    <SafeAreaView style={BackArrowStyles.global}>
      <Icon name="arrowleft" style={BackArrowStyles.arrow} />
    </SafeAreaView>
  );
};

export default BackArrow;
