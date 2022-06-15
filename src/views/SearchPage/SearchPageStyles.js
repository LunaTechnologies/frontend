import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default SearchPageStyles = StyleSheet.create({
  global: {
    backgroundColor: 'white',
  },
  searchBar: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0.05 * height,
  },

  results: {
    marginTop: 0.05 * height,
    width: '90%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'yellow',
  },

  resultContainer: {
    height: 0.14 * height,
    flexDirection: 'row',
    backgroundColor: 'red',
    backgroundColor: colors.darkerGray,
    marginBottom: 0.05 * height,
    borderRadius: 10,
  },
  resultDetails: {
    // backgroundColor: 'green',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTitle: {
    fontSize: 22,
    // fontWeight: 'light',
    color: colors.black,
    // backgroundColor: 'blue',
  },
  resultImage: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
