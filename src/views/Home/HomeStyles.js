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
  subtitle: {
    fontSize: 20,
    fontWeight: 'normal',
    textTransform: 'capitalize',
    textAlignVertical: 'center',
    color: colors.black,
    // backgroundColor: 'red',
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
    marginBottom: 10,
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
  textContainer: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 0.9 * width,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardsContainer: {
    marginBottom: 30,
    // backgroundColor: 'yellow',
  },
  specialOfferContainer: {
    marginTop: 10,
    marginBottom: 0.5 * height,
    backgroundColor: 'yellow',
  },
  specialOfferImage: {
    height: 0.2 * height,
    width: 0.9 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
  },
  specialOfferTextContainer: {
    backgroundColor: 'green',
    position: 'absolute',
    left: 0.1 * width,
    top: 0.05 * height,
  },
  specialOfferText: {
    color: colors.white,
    fontSize: 16,
  },
});
