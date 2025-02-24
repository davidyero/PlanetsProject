import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors';
import { CommonStyles } from '../../shared/styles/CommonStyles';

export const SuperInputStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerInput: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 10,
    marginTop: 5,
    width: '100%',
  },
  input: {
    color: Colors.primary,
    height: 40,
    paddingHorizontal: 10,
    width: '100%',
  },
  label: {
    ...CommonStyles.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
