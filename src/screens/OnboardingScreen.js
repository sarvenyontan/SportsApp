import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const OnboardingScreen = ({navigation}) => {
    return (
      <SafeAreaView 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `#fff`,
        }}
      >
        <View style={{flex: 1}}>
          <Text style={{
            fontSize: 45, 
            fontWeight: 'bold', 
            color: '#ACB1D6',
            marginTop: 20,
            marginLeft: 27
            }}>SPORTOGETHER</Text>
          <Image source={require('../assets/images/sportogether.png')} style={{
            width: 400,
          }}/> 
        </View>
        <TouchableOpacity 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#A0D8B3', 
            padding:5, 
            width:'75%', 
            borderRadius:15,
            marginBottom: 20}}
          onPress={() => navigation.navigate('Login')}
          >
          <Text style={{
            color: 'white', 
            justifyContent: 'center', 
            textAlign: 'center', 
            fontSize: 30, 
            fontWeight: 'bold',
            marginLeft: 15
            }}>Go!</Text>
          <Ionicons name='enter-outline' size={35} color='#fff' style={{marginRight: 10}}/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  export default OnboardingScreen;