import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default PageTitleStyles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 32,
    fontFamily: 'Overpass',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 0.1 * height,
  },
});
