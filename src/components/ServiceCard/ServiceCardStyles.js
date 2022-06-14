import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default ServiceCardStyles = StyleSheet.create({
  container: {
    height: 0.35 * height,
    width: 0.4 * width,
    backgroundColor: colors.darkerGray,
    // backgroundColor: 'red',
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: '50%',
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  favoriteIcon: {
    fontSize: 18,
    color: colors.black,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    borderRadius: 100,
  },

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
