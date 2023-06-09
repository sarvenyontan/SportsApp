import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import SportsImage from '../svg/SportsImage';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MomentsScreen = () => {
  return (
    <SafeAreaView>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <SportsImage />
      </View>
        <View style={{marginTop: 40}}>
        <TouchableOpacity  style={styles.container}>
        <MaterialCommunityIcons name="email" size={35} color="black" style={{marginTop: 15}} />
          <Text style={styles.text}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
        <MaterialCommunityIcons name="information-outline" size={35} color="black" style={{marginTop: 15}} />
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
        <MaterialCommunityIcons name="security" size={35} color="black" style={{marginTop: 15}} />
          <Text style={styles.text}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <MaterialCommunityIcons name="account" size={35} color="black" style={{marginTop: 15}} />
          <Text style={styles.text}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', borderWidth: 1, borderColor: '#666', marginTop: 10, height: 64,}}>
        <Ionicons name="settings" size={35} color="black" style={{marginTop: 15, marginLeft: 5}} />
          <Text style={styles.text}>Settings Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MomentsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#666'
  },
  container: {
    flexDirection: 'row',
    borderColor: '#666',
    borderTopWidth: 1,
    marginTop: 10,
    marginLeft: 5
  }

})