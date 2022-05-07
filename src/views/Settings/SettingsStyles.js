import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width,
    height,
  },
  imageSection: {
    width,
    height: 0.25 * height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    image: {
      width: 75,
      height: 75,
      borderRadius: 50,
      backgroundColor: colors.blue,
    },
  },
  nameSection: {
    width,
    height: 0.12 * height,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    name: {
      fontSize: 22,
      color: colors.black,
    },
    email: {
      fontSize: 18,
    },
  },
  editSection: {
    width,
    height: 0.1 * height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      width: 180,
      height: 44,
      backgroundColor: colors.blue,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,

      text: {
        color: colors.white,
        fontSize: 16,
      },
      icon: {},
    },
  },
  mainSection: {
    paddingHorizontal: 20,
    title: {
      width: width * 0.9,
      height: 49,
      backgroundColor: colors.gray,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 20,

      text: {
        fontSize: 12,
      },
    },
    button: {
      width: width * 0.9,
      height: 49,
      display: 'flex',
      justifyContent: 'center',
      text: { color: colors.black },
    },
    contentSection: {},
    preferencesSection: {},
  },
});

export default styles;
