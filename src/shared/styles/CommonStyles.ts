import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const CommonStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
  },
  genericView: {
    height: '100%',
    paddingHorizontal: 16,
    width: '100%',
  },
  textDark: {
    color: Colors.background,
  },
  textPrimary: {
    color: Colors.primary,
    overlayColor: '87%',
  },
  textSecondary: {
    color: Colors.primary,
    overlayColor: '60%',
  },
  titleHeader: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
