import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const SuperSwitchStyles = StyleSheet.create({
  borderRadiusLeft: {
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  borderRadiusRight: {
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  containerText: {
    alignItems: 'center',
    opacity: 0.5,
    padding: 10,
    width: '50%',
  },
  selected: {
    backgroundColor: Colors.secondary,
    opacity: 1,
  },
  selectedText: {
    color: Colors.background,
  },
  switch: {
    borderColor: Colors.primary,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
