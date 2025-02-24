import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const LanguagesModalStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  row: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  rowActive: {
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
    marginLeft: 10,
  },
});
