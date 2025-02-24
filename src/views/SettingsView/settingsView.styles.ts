import { StyleSheet } from 'react-native';
import { Colors } from '../../shared/styles/Colors.ts';

export const SettingsViewStyles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  container: {},
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rowGroup: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 10,
    width: '100%',
  },
  rowText: {
    alignItems: 'center',
    color: Colors.primary,
    flexDirection: 'row',
    flex: 1,
    fontSize: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  textCard: {
    color: Colors.primary,
    fontSize: 14,
  },
  titleCard: {
    color: Colors.primary,
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 16,
    marginTop: 12,
    textAlign: 'left',
  },
});
