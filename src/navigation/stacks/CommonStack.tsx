import { createStackNavigator } from '@react-navigation/stack';
import { SettingsView } from '../../views/SettingsView/settingsView.tsx';
import { DetailPlanetView } from '../../views/DetailPlanetView/detailPlanetView.tsx';
import { HomeView } from '../../views/HomeView/homeView.tsx';

const Stack = createStackNavigator();

export const CommonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="DetailPlanetView"
        component={DetailPlanetView}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="SettingsView"
        component={SettingsView}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};
