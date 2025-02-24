import { Platform, StyleSheet } from 'react-native';
import { CommonStyles } from '../../shared/styles/CommonStyles';
const isAndroid = Platform.OS === 'android';

export const GenericContainerViewStyles = StyleSheet.create({
  container: {
    ...CommonStyles.backgroundPrimary,
    width: '100%',
  },
  containerView: {
    ...CommonStyles.genericView,
    marginTop: isAndroid ? 30 : 0,
    width: '100%',
  },
});
