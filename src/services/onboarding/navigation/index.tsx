import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from '../screens/landing';

const Stack = createNativeStackNavigator();

const OnboardNavigationStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{animation: 'slide_from_left'}}>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnboardNavigationStack;
