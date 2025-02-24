import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CommonStack } from '../../navigation/stacks/CommonStack';
const Stack = createNativeStackNavigator();

export const ContentView = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Common"
            component={CommonStack}
            options={() => {
              return {
                headerShown: false,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
