import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const DetailPlanetViewStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
  title: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
