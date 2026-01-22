import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DevHarnessScreen from '../screens/DevHarnessScreen';
import { env } from '../lib/env';

export type RootStackParamList = {
  Home: undefined;
  DevHarness: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const showDevHarness = env.DEV_HARNESS_ENABLED;

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        {showDevHarness ? (
          <Stack.Screen
            name="DevHarness"
            component={DevHarnessScreen}
            options={{ title: 'Dev Harness' }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
