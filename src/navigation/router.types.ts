import { StackScreenProps } from '@react-navigation/stack';
import { DetailPlanetViewType } from "../views/DetailPlanetView/detailPlanetView.type.ts";

export type RootStackParamList = {
  HomeView: undefined;
  SettingsView: undefined;
  DetailPlanetView: DetailPlanetViewType;
};

export interface HomeViewProps
  extends StackScreenProps<RootStackParamList, 'HomeView'> {}
export interface SettingsViewProps
  extends StackScreenProps<RootStackParamList, 'SettingsView'> {}
export interface DetailPlanetViewProps
  extends StackScreenProps<RootStackParamList, 'DetailPlanetView'> {}

