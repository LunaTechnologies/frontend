import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default ServiceCardStyles = StyleSheet.create({
  container: {
    height: 0.35 * height,
    width: 0.4 * width,
    // backgroundColor: colors.darkerGray,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  image: {
    height: '50%',
    width: '100%',
  },
});
