import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {},
  container: { width },
  pagination: {
    container: {
      width,
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    dot: {
      width: 20,
      height: 1,
      backgroundColor: colors.white,
    },
    inactiveDot: {
      width: 9,
      height: 1,
    },
  },
});

export { styles };
