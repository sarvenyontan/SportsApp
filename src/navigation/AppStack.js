import React from 'react';
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MomentsScreen from '../screens/MomentsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        headerShown:false, 
        drawerLabelStyle: {marginLeft: -25, fontSize: 15},
        drawerActiveBackgroundColor: '#95E1D3',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333'
        }}>
        <Drawer.Screen component={TabNavigator} name="Home" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home-outline' size={22} color={color} />
          )
        }}/>
        <Drawer.Screen component={ProfileScreen} name="Profile" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person-outline' size={22} color={color} />
          )
        }}/>
        <Drawer.Screen component={MessagesScreen} name="Notifications" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='notifications-outline' size={22} color={color} />
          )
        }}/>
        <Drawer.Screen component={MomentsScreen} name="Moments" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='timer-outline' size={22} color={color} />
          )
        }}/>
        <Drawer.Screen component={SettingsScreen} name="Settings" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          )
        }}/>
    </Drawer.Navigator>
  );
};

export default AppStack;

