import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors.js';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width,
    height,
    backgroundColor: colors.white,
    color: colors.black,
  },
  imageSection: {
    image: { width, height: 0.4 * height },
  },

  titleSection: {
    title: {},
  },

  priceSection: {
    price: {},
  },

  descriptionSection: {
    title: {},
    descriptionContainer: {},
    description: {},
  },
  ownerSection: {
    image: {},
    info: {
      text: {},
      name: {},
      messageButtonContainer: {},
      messageButton: {},
    },
  },
});

export default styles;
