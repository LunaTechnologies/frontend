import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export default PostFieldTextInputStyles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.gray,
    color: colors.darkGray,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 18,
    borderRadius: 12,
    height: 'auto',
    width: 'auto',
  },
});
