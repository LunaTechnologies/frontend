import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default PostStyles = StyleSheet.create({
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

  terms: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    // backgroundColor: 'red',
    width: 0.9 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  termsIcon: {
    fontSize: 26,
    color: colors.black,
  },
});
