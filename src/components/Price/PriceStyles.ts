import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default PriceStyles = StyleSheet.create({
  cardText: {
    fontSize: 20,
    color: colors.black,
    // backgroundColor: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  cardPriceContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardServType: {
    fontSize: 14,
  },
});
