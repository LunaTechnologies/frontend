import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default BackArrowStyles = StyleSheet.create({
  global: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },

  arrow: {
    color: colors.black,
    fontSize: 30,
  },
});
