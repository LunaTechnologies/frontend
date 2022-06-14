import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default HomeStyles = StyleSheet.create({
  loading: {
    height: height,
    width: width,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    color: colors.black,
    letterSpacing: 1,
  },
  title: {
    textAlign: 'left',
    width: 0.8 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  tabs: {
    // flexDirection: 'row',
    // backgroundColor: 'pink',
    marginLeft: 16,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBotton: 30,
    height: 0.1 * height,
    // backgroundColor: 'green',
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

  cardsContainer: {
    marginTop: 30,
    marginBotton: 30,
    // backgroundColor: 'yellow',
  },

  specialOfferImage: {
    height: 0.2 * height,
    width: 0.8 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
