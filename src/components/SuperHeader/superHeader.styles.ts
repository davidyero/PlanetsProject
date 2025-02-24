import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const SuperHeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstText: {
    color: Colors.primary,
  },
  secondText: {
    color: Colors.secondary,
  },
  textContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
