import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {},
  container: { width, backgroundColor: colors.red },
});

export { styles };
