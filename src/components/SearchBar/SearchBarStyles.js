import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default SearchBarStyles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    height: 0.08 * height,
    width: 0.7 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 12,
    flexDirection: 'row',
  },
  textInput: {
    // backgroundColor: 'red',
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
    width: '60%',
    // width: 'auto',
    borderRadius: 12,
  },
  searchIconContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'blue',
    borderRadius: 12,
  },
  searchIcon: {
    color: colors.black,
    fontSize: 24,
  },
});
