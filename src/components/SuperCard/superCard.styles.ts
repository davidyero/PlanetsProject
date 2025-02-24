import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const SuperCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});
