import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default SearchPageStyles = StyleSheet.create({
  searchBar: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0.05 * height,
  },

  image: {
    // height: '50%',
    // height: '75%',
    // width: '100%',
    width: 90,
    height: 90,
  },
});
