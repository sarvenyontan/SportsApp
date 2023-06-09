import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

  return (
    <View style={{
        height:44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#A0D8B3',
        flexDirection: 'row',
        justifyContent:'center'
    }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 1 ? '#A0D8B3' : '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
      >
        <Text style={{
            color: getSelectionMode == 1 ? 'white' : '#A0D8B3',
            fontSize: 14,
        }}>{option1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 2 ? '#A0D8B3' : '#e4e4e4',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
      >
        <Text style={{
            color: getSelectionMode == 2 ? 'white' : '#A0D8B3',
            fontSize: 14,
        }}>{option2}</Text>
      </TouchableOpacity>
    </View>
  )
}