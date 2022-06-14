import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default TabStyles = StyleSheet.create({
  container: {
    height: 0.065 * height,
    width: 0.25 * width,
    backgroundColor: colors.darkerGray,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    height: '100%',
    width: '100%',
    borderRadius: 20,

    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: colors.black,
  },
});
