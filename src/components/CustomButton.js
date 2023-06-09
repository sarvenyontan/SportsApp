import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} 
        style={{
            backgroundColor: '#0aada8', 
            padding: 20, 
            borderRadius: 15, 
            marginTop: 25
            }}>
          <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff'
            }}>
            {label}
          </Text>
    </TouchableOpacity>
  )
}

export default CustomButton