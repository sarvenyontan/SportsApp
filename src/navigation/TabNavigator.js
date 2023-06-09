import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import ChartScreen from '../screens/ChartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetailScreen from '../screens/EventDetailScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={HomePage} name="Home" options={{headerShown: false}}/>
            <Stack.Screen component={EventDetailScreen} name="EventDetails" options={({route}) => ({
                title: route.params?.title,
            })}/>
        </Stack.Navigator>
      );
    };

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0aada8'
    }}>
      <Tab.Screen 
        name="Home2" 
        component={HomeStack} 
        options={(route) => ({
            tabBarStyle: {display: getTabBarVisibility(route)},
            tabBarIcon: ({color, size}) => (
                <Ionicons name='home-outline' color={color} size={size}/>
            )
      })}/>
      <Tab.Screen 
        name="Chart" 
        component={ChartScreen} 
        options={{
        tabBarIcon: ({color, size}) => (
            <Ionicons name='map-outline' color={color} size={size}/>
        )
      }}/>  
      <Tab.Screen 
        name="Favorite" 
        component={FavoriteScreen} 
        options={{
        tabBarIcon: ({color, size}) => (
            <Ionicons name='heart-outline' color={color} size={size}/>
        )
      }}/>    
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
    //console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    //console.log(routeName);

    if ( routeName == 'EventDetails') {
        return 'none';
    }
    return 'flex';
}

export default TabNavigator