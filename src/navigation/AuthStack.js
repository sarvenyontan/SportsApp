import React from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={OnboardingScreen} name="Onboarding"/>
        <Stack.Screen component={LoginScreen} name="Login"/>
        <Stack.Screen component={RegisterScreen} name="Register"/>
    </Stack.Navigator>
  );
};

export default AuthStack;