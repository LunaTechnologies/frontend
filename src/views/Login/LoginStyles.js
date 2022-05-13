import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width,
    height,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  logoSection: {
    width,
    height: height * 0.1,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    // WEIRD
    height: 40.77,
    width: 81.54,
    backgroundColor: colors.black,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: '90deg' }, { scale: 0.7 }],

    position: 'absolute',
    left: -20,
  },

  title: {
    fontSize: 30,
    width,
    height: height * 0.2,
    display: 'flex',
    justifyContent: 'center',
    text: { fontSize: 30, color: colors.black },
  },

  subTitle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 14,

    text: {
      color: colors.darkGray,
    },
    button: {},
  },

  form: {
    height: height * 0.7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    inputFields: {
      width,
      height: 0.3 * height,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    emailField: {
      position: 'relative',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: width * 0.8,
      height: 0.075 * height,
      backgroundColor: colors.gray,
      color: colors.black,
      borderRadius: 10,
      margin: 2,
      padding: 15,
      fontSize: 14,
    },

    iconUsername: {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: colors.blue,
      position: 'absolute',
      right: 10,
      top: '50%',
      // transform: translateY(-50%);
      transform: [{ translateY: -25 / 2 }],
      zIndex: 1,
      opacity: 0,
    },

    bottomElements: {
      // height: 0.2 * height,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    submit: {
      width: width * 0.8,
      height: 65,
      backgroundColor: colors.black,
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      text: {
        fontSize: 20,
        color: colors.white,
      },
    },
  },

  skipSection: {
    height: height * 0.08,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    skip: {
      fontSize: 18,
      color: colors.darkGray,
    },
  },

  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
