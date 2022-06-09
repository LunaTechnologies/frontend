import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default CatalogStyles = StyleSheet.create({
  title: {
    // backgroundColor: 'red',

    color: colors.black,
    fontSize: 36,
    fontFamily: 'Overpass',
    fontWeight: 'bold',
    letterSpacing: 2,

    paddingHorizontal: 0.1 * width,
    height: 0.2 * height,
    textAlignVertical: 'center',
  },
});
