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
    width,
    height: height * 0.1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 20,
    title: {
      fontSize: 25,
      fontWeight: '500',
      color: colors.black,
    },
  },

  priceSection: {
    width,
    height: 0.05 * height,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 20,
    price: { color: colors.black, fontSize: 15, fontWeight: '400' },
  },

  descriptionSection: {
    paddingHorizontal: 20,
    title: { height: 0.05 * height, color: colors.black, fontSize: 20 },
    descriptionContainer: {
      height: 0.2 * height,
      backgroundColor: colors.gray,
      borderRadius: 20,
      paddingHorizontal: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: { color: colors.black, textAlign: 'center' },
  },
  ownerSection: {
    width,
    height: 60,
    display: 'flex',
    backgroundColor: colors.gray,
    flexDirection: 'row',
    image: { width: 60, height: 60 },
    info: {
      text: { color: colors.black },
      name: { color: colors.black },
      messageButtonContainer: {},
      messageButton: {},
    },
  },
  phoneSection: {
    display: 'flex',
    flexDirection: 'row',
    title: { color: colors.black },
    number: {
      color: colors.blue,
      textDecoration: 'underline',
    },
  },
  rentSection: {
    width: 0.8 * width,
    height: 0.1 * height,
    margin: 'auto',
    // marginHorizontal: 20,
    button: {
      backgroundColor: colors.black,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: { color: colors.white },
  },
});

export default styles;
