import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  errorField: {
    width: width * 0.9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    errorText: {
      color: colors.red,
      fontSize: 14,
      textAlign: 'center',
    },
  },
});

export { styles };
