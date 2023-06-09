import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({photo, title, subTitle, isActive, onPress}) {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    }}>
      <View style={{flexDirection: 'row',alignItems: 'center', flex:1}}>
        <Image source={photo} style={{width: 55, height: 55, borderRadius: 15, marginRight: 8}}/>
      <View style={{width: windowWidth - 220}}>
        <Text style={{color: 'black', fontSize: 15}}>{subTitle}</Text>
        <Text 
            numberOfLines={1}
            style={{color: 'black', fontSize: 15, textTransform: 'uppercase', fontWeight: 'bold'}}>{title}</Text>
      </View>
      </View>
      <TouchableOpacity onPress={onPress} style={{
        backgroundColor: '#47A992',
        padding: 10,
        width: 100,
        borderRadius: 15,
      }}>
        <Text style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
            {isActive == 'Yes' && 'Info'}
            {isActive == 'No' && 'Expired'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}