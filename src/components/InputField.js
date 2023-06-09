import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const InputField = ({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction}) => {
  return (
    <View style={{
        flexDirection: 'row', 
        borderBottomColor: '#ccc', 
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginTop: 20
        }}>
        {icon}
        {inputType == 'password' ? (<TextInput 
            placeholder={label} 
            keyboardType={keyboardType}
            style={{flex: 1, paddingVertical: 0}} 
            secureTextEntry={true}/>
        ) : (
            <TextInput 
            placeholder={label}
            keyboardType={keyboardType} 
            style={{flex: 1, paddingVertical: 0}} 
            />
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text 
            style={{color:'#0aada8', fontWeight:'bold'}}>{fieldButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default InputField