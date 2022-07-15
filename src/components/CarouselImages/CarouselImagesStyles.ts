import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: { width, height: 0.5 * height },
  container: { width },
  dot: {
    width: 20,
    height: 1,
    backgroundColor: colors.white,
    margin: 5,
  },
  inactiveDot: {
    width: 9,
    height: 1,
    backgroundColor: colors.darkGray,
    margin: 5,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
});

export { styles };
