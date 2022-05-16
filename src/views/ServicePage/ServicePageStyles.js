import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors.js';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width,
    height,
  },
});

export default styles;
