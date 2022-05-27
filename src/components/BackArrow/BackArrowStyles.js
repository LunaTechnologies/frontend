import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

export default BackArrowStyles = StyleSheet.create({
  global: {
    position: 'absolute',
    left: 20,
    top: 20,
  },

  arrow: {
    color: colors.white,
    fontSize: 30,
  },
});
