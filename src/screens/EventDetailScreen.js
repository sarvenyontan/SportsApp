import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import EventImage from '../svg/EventImage';
import LetsGo from '../svg/LetsGo';
import Ionicons from '@expo/vector-icons/Ionicons';

const EventDetailScreen = ({navigation, route}) => {
  const simpleAlert = () => {
    alert('Your application has been received! We will sent email about event!' 
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Event Detail</Text>
        <Text style={{fontSize: 18}}>{route.params?.title}</Text>
      </View>
      <EventImage style={{marginTop: 20}}/>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Keep the phone loud!</Text>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Event is Coming Soon!</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Apply to Event</Text>
      <Ionicons name="arrow-down-circle" size={24} color="black" />
      <TouchableOpacity onPress={simpleAlert} 
        style={{
        backgroundColor: '#0aada8', 
        width: 150, height: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Apply</Text>
      </TouchableOpacity>
      <LetsGo style={{marginTop: 10}}/>
    </View>
  )
}

export default EventDetailScreen;