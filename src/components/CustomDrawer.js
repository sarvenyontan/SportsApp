import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, {useContext} from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const CustomDrawer = (props) => {
    const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView 
            {...props}
            contentContainerStyle={{backgroundColor: '#EAFFD0'}}
        >
        <Image source={require('../assets/images/user-profile.jpeg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft: 10}}
        />
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18, marginLeft: 7, marginBottom: 5}}>Sarven Yontan</Text>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 7, marginBottom: 5}}>27/09/1999</Text>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 5}}>
            <DrawerItemList {...props}/>
        </View>
        </DrawerContentScrollView>
    <View style={{padding: 20, borderTopWidth:1, borderTopColor: '#333'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='share-social-outline' size={22}/>
                <Text style={{fontSize: 15, marginLeft: 5}}>Tell a Friend</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='exit-outline' size={22}/>
                <Text style={{fontSize: 15, marginLeft: 5}}>Sign Out</Text>
            </View>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomDrawer