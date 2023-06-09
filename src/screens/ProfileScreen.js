import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Title} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';


const ProfileScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={{backgroundColor: '#E5F9DB', height: 200}}>
      <View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 20}}>
          <ImageBackground
            source={require('../assets/images/user-profile.jpeg')}
            style={{width: 120, height: 120}}
            imageStyle={{borderRadius: 45}}
            />
          <View style={{marginLeft: 10, marginTop: 30}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Sarven Yontan</Text>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#666'}}>@Sarven23</Text>
          </View>
        </View>  
      </View>
      <View>
        <View style={{flexDirection: 'row', marginTop: 35, marginLeft: 15}}>
          <MaterialCommunityIcons name="map-marker" size={30} color="#666" />
          <Text style={{marginTop: 3, fontSize: 17, color: '#666', marginLeft: 5}}>Istanbul, Turkey</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <MaterialCommunityIcons name="phone" size={30} color="#666" />
          <Text style={{marginTop: 3, fontSize: 17, color: '#666', marginLeft: 5}}>+90-555-55-55</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <MaterialCommunityIcons name="email" size={30} color="#666" />
          <Text style={{marginTop: 3, fontSize: 17, color: '#666', marginLeft: 5}}>sarven@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={[
          styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Text style={{fontWeight: 'bold'}}>Activities I participated in</Text>
          <Text style={{fontSize: 15, color: '#666'}}>6</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{fontWeight: 'bold'}}>My Achievements</Text>
          <Text style={{fontSize: 15, color: '#666'}}>2</Text>
        </View>
      </View>
      <View>
          <TouchableOpacity style={{
              flexDirection: 'row', 
              borderBottomColor: '#dddddd', 
              marginTop: 15, 
              borderBottomWidth: 1, 
              marginLeft: 10,
              
              }}>
            <MaterialCommunityIcons name="information-outline" size={40} color="#666" marginBottom={15} />
            <Text style={{fontSize: 22, color: '#666', marginLeft: 7, marginTop: 7}}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#dddddd', marginLeft: 10}}>
            <MaterialCommunityIcons name="send" size={40} color="#666" marginBottom={15} />
            <Text style={{fontSize: 22, color: '#666', marginLeft: 7, marginTop: 7}}>Send Your Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#dddddd', marginLeft: 10}}>
            <Ionicons name="settings" size={40} color="#666" marginBottom={15} />
            <Text style={{fontSize: 22, color: '#666', marginLeft: 7, marginTop: 7}}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {logout()}}
            style={{flexDirection: 'row', marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#dddddd', marginLeft: 10}}>
            <MaterialCommunityIcons name="exit-to-app" size={40} color="#666" marginBottom={15} />
            <Text style={{fontSize: 22, color: '#666', marginLeft: 7, marginTop: 7}}>Log Out</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles= StyleSheet.create({
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 10
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})