import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  errorField: {
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    errorText: {
      color: colors.red,
      fontSize: 14,
    },
  },
});

export { styles };
