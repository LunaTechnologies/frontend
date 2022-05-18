import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default DropdownStyles = StyleSheet.create({
  container: {
    width: 0.5 * width,
    borderRadius: 12,
    // padding: 18,
    backgroundColor: 'red',
    backgroundColor: colors.lightOrange,
    zIndex: 10,
  },

  //   selectedOption: {
  //     color: colors.darkGray,
  //     backgroundColor: colors.gray,
  //     backgroundColor: colors.lightOrange,

  //     fontWeight: 'bold',
  //     fontSize: 16,
  //     textAlign: 'center',
  //     textAlignVertical: 'center',

  //     padding: 12,
  //     width: 0.5 * width,

  //     borderTopLeftRadius: 12,
  //     borderTopRightRadius: 12,
  //   },

  optionsList: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.lightOrange,
  },
  optionsContainer: {
    width: '100%',
    // back,
  },
  option: {
    color: colors.darkGray,
    // backgroundColor: colors.gray,
    backgroundColor: colors.lightOrange,

    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',

    padding: 12,
    borderRadius: 12,
    width: '100%',
  },

  borderLine: {
    height: 1,
    width: '64%',
    backgroundColor: colors.darkGray,
    marginLeft: 'auto',
    marginRight: 'auto',
    // position: 'absolute',
    // left: '25%',
    // marginTop: 5,
    // marginBottom: 5,
  },
});
