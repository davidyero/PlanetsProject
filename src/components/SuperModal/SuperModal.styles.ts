import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors';

export const SuperModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    zIndex: 4,
  },
  containerBottom: {
    justifyContent: 'flex-end',
  },
  modalContainerLarge: {
    height: '80%',
  },
  modalContainerMedium: {
    height: '70%',
  },
  modalContainerSmall: {
    height: '50%',
  },
  modalContainerExtraSmall: {
    height: '30%',
  },
  modalContainerExtraExtraSmall: {
    height: '20%',
  },
  modalPrimary: {
    backgroundColor: Colors.background,
  },
  modalSecondary: {
    backgroundColor: Colors.backgroundSecondary,
  },
  modalTertiary: {
    backgroundColor: Colors.backgroundTertiary,
  },
  modalContainer: {
    padding: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: '100%',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.1,
    zIndex: 2,
  },
  title: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    alignItems: 'flex-start',
    color: Colors.primary,
    fontSize: 16,
    marginTop: 5,
    width: '100%',
  },
});
