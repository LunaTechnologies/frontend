import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default PostFieldStyles = StyleSheet.create({
  global: {
    width: 0.8 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  children: {
    width: '100%',
    justifyContent: 'space-around',
    zIndex: 1,
  },
});
