import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default SwitchStyles = StyleSheet.create({
  container: {
    height: 0.05 * height,
    width: 0.14 * width,
    backgroundColor: colors.blue,
    borderRadius: 18,
    // display: 'flex',
    // justifyContent: 'center',
  },
  circle: {
    height: '90%',
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 50,
    position: 'absolute',
    top: 0.5 * (0.1 * 0.05 * height),
    left: 0.5 * (0.1 * 0.05 * height),
    // right: 'initial',
    // margin: 0.05 * 0.05 * height,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
