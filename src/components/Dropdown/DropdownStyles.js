import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default DropdownStyles = StyleSheet.create({
  container: {
    width: 0.5 * width,
    height: '100%',
    zIndex: 10,
  },

  option: {
    color: colors.darkGray,
    backgroundColor: colors.lightOrange,

    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',

    height: '100%',
    // height: 20,
    width: '100%',
  },

  optionBorderRadius: 12,

  borderLine: {
    height: 1,
    width: '64%',
    backgroundColor: colors.darkGray,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
});
