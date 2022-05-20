import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default CatalogStyles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 32,
    fontFamily: 'Overpass',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    // backgroundColor: 'red',
    height: 0.1 * height,
  },

  addImagesButton: {
    backgroundColor: colors.lightOrange,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  addImagesBackgroundCircle: {
    position: 'absolute',
    backgroundColor: colors.orange,
    width: '75%',
    height: '200%',
    width: 230,
    borderRadius: 100,
    // top: 0,
    // left: '50%',
    // transform: [{translateX: -50}],
    zIndex: -1,
  },
  addImageIcon: {
    color: colors.white,
    fontSize: 24,
  },
  addImagesText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    padding: 24,

    textAlignVertical: 'center',
    textAlign: 'center',
    zIndex: 1,
  },
});