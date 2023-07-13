import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Dashboard } from './src/screens/dashboard';
import { GeneratedRecipes } from './src/screens/generated';
import { ViewRecipe } from './src/screens/viewRecipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Generated"
          component={GeneratedRecipes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewRecipe"
          component={ViewRecipe}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}