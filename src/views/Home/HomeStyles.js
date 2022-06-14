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
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginBottom: 0.1 * height,
    // backgroundColor: 'yellow',
  },
  specialOfferImage: {
    height: 0.2 * height,
    width: 0.9 * width,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
  },
  specialOfferTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    left: 0.1 * width,
    // top: 0.05 * height,
    top: '50%',
    transform: [{ translateY: -50 }],
    width: '30%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  specialOfferTitle: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },

  specialOfferButtonContainer: {
    backgroundColor: colors.black,
    width: '75%',
    height: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
  },
  specialOfferButtonText: {
    color: colors.white,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addIconButton: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  addIcon: {
    fontSize: 28,
    color: colors.black,
  },
});
