import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BackArrowStyles from './BackArrowStyles';

interface Props {
  color: string;
  handler: () => void;
}

const BackArrow = ({ color, handler }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={BackArrowStyles.global}
      onPress={handler || (() => navigation.goBack())}>
      <Icon name="arrowleft" style={{ ...BackArrowStyles.arrow, color }} />
    </TouchableOpacity>
  );
};

export default BackArrow;
