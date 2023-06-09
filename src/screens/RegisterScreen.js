import {SafeAreaView, View, Text, ScrollView } from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegisterImage from '../svg/RegisterImage';
import GoogleImage from '../svg/GoogleImage';
import FacebookImage from '../svg/FacebookImage';
import TwitterImage from '../svg/TwitterImage';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({navigation}) => {
  const simpleAlert = () => {
    alert('Your registration is complete, you can login to the app!' 
    );
  }
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegisterImage />
        </View>
        <Text style={{
          fontSize: 28,
          fontWeight: '500',
          color: '#333',
          marginTop: 15
        }}>Register
        </Text>
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
        <Text style={{
          textAlign: 'center',
          color: '#666',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 7
        }}>Or, register with email...</Text>
        
        <InputField 
          label={'Full Name'}
          icon = {
            <Ionicons 
            name='person-outline' 
            size={20} 
            color='#666' 
            style={{marginRight: 5}}
            />
          } 
          keyboardType="email-address" 
        />
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
        />
        <InputField   
          label={'Confirm Password'}
          icon = {
            <Ionicons 
                name='ios-lock-closed-outline' 
                size={20} 
                color='#666' 
                style={{marginRight: 5}}
            />
          } 
          inputType="password" 
        />

        <CustomButton label={'Register'} onPress={simpleAlert}/>
        
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
          <Text>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#0aada8', fontWeight: 'bold', marginLeft: 3}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen;