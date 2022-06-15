import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default PostFieldTitleStyles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',

    height: 40,
    marginBottom: 16,
  },
  asterisk: {
    color: 'red',
    fontWeight: 'bold',
  },
});
