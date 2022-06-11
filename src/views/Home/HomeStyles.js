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

  filterOptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '12%',

    // backgroundColor: 'blue',
  },

  filterOptionsIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',

    fontSize: 30,
  },
});
