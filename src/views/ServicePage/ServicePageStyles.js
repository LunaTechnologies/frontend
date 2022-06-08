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
    height: height * 0.07,
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
    price: {
      color: colors.black,
      fontSize: 15,
    },
    valueStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    lengthStyle: { color: colors.darkGray },
  },

  descriptionSection: {
    paddingHorizontal: 20,
    title: { height: 0.05 * height, color: colors.black, fontSize: 20 },
    descriptionContainer: {
      minHeight: 0.2 * height,
      backgroundColor: colors.gray,
      borderRadius: 20,
      paddingHorizontal: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: { color: colors.black, textAlign: 'center' },
    readMore: {
      text: { color: colors.black, fontWeight: 'bold', fontSize: 20 },
    },
  },
  ownerSection: {
    width: width - 60,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    marginHorizontal: 30,
    marginVertical: 20,
    image: { width: 60, height: 60 },
    info: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 30,
      width: width - 60 - width * 0.3 - 50,
      text: { color: colors.darkGray },
      name: { color: colors.black, fontSize: 18, fontWeight: '500' },
    },
    messageButtonContainer: {
      width: 75,
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageButton: {
      width: 40,
      height: 40,
      backgroundColor: colors.black,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageIcon: {
      color: colors.white,
      fontSize: 30,
    },
  },
  phoneSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    title: { color: colors.black, fontSize: 16 },

    number: {
      color: colors.blue,
      fontSize: 18,
      textDecorationLine: 'underline',
    },
  },
  rentSection: {
    width,
    height: 0.15 * height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      width: 0.8 * width,
      height: 0.08 * height,
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
