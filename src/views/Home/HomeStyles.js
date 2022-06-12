import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default HomeStyles = StyleSheet.create({
  title: {
    textAlign: 'left',
    width: 0.8 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  tabs: {
    flexDirection: 'row',
    marginLeft: 16,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBotton: 20,
    height: 0.1 * height,
    backgroundColor: 'green',
  },

  filterOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '12%',
    // backgroundColor: 'blue',
  },

  filterOptionsIcon: {
    fontSize: 30,
  },
});
