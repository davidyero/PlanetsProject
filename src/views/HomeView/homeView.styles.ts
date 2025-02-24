import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const HomeViewStyles = StyleSheet.create({
  container: {},
  containerFilters: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  notFound: {
    color: Colors.primary,
    fontSize: 20,
    textAlign: 'center',
  },
});
