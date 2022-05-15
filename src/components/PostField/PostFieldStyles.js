import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default PostFieldStyles = StyleSheet.create({
  global: {
    width: 0.8 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',

    height: 40,
    marginBottom: 16,
    position: 'relative',
  },
  asterisk: {
    color: 'red',
    fontWeight: 'bold',
  },
});
