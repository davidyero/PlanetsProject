import { StyleSheet } from 'react-native';
import { CommonStyles } from '../../shared/styles/CommonStyles';

export const GenericContainerViewStyles = StyleSheet.create({
  container: {
    ...CommonStyles.background,
    width: '100%',
  },
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerView: {
    ...CommonStyles.genericView,
    // marginTop: isAndroid ? 30 : 0,
    width: '100%',
  },
  text: {
    ...CommonStyles.titleHeader,
  },
});
