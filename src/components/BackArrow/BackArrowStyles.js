import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default CatalogStyles = StyleSheet.create({
  global: {
    position: 'absolute',
    left: 20,
    top: 20,
  },

  arrow: {
    color: colors.black,
    fontSize: 30,
  },
});
