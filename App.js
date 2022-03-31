import React from 'react';
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './constants';
import { Home, Details } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <StatusBar backgroundColor={theme.COLORS.primary} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;