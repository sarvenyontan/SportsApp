import { View, Text } from 'react-native';
import React from 'react';

export default function SecondPage({route}) {
  return (
    <View>
      <Text>{route.params.blogpost.name}</Text>
      <Text>{route.params.blogpost.content}</Text>
    </View>
  );
}
