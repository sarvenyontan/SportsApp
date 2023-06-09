import {SafeAreaView, View, Text, Image, ImageBackground, TextInput } from 'react-native';
import React, {useContext} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainImage from '../svg/MainImage';
import GoogleImage from '../svg/GoogleImage';
import FacebookImage from '../svg/FacebookImage';
import TwitterImage from '../svg/TwitterImage';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext); 

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <MainImage />
        </View>
        <Text style={{
          fontSize: 28,
          fontWeight: '500',
          color: '#333'
        }}>Login
        </Text>
        <Text></Text>
        <InputField   
          label={'Email ID'}
          icon = {
            <Ionicons 
            name='mail-outline' 
            size={20} 
            color='#666' 
            style={{marginRight: 5}}
            />
          } 
          keyboardType="email-address" 
        />
        <InputField   
          label={'Password'}
          icon = {
            <Ionicons 
            name='ios-lock-closed-outline' 
            size={20} 
            color='#666' 
            style={{marginRight: 5}}
            />
          } 
          inputType="password" 
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={'Login'} onPress={() => {login()}}/>

        <Text style={{
          textAlign: 'center',
          color: '#666',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 5
        }}>Or, login with ...</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <TouchableOpacity onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 25,
              paddingVertical: 5,
            }}
            >
            <GoogleImage height={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 25,
              paddingVertical: 5,
            }}
            >
            <FacebookImage height={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 25,
              paddingVertical: 5,
            }}
            >
            <TwitterImage height={48} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#0aada8', fontWeight: 'bold', marginLeft: 3}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

