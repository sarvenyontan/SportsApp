import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { PureComponent } from 'react';
import BasketballImage from '../svg/BasketballImage';
import FootballImage from '../svg/FootballImage';
import VolleyballImage from '../svg/VolleyballImage.js';
import UserImage from '../svg/UserImage';

export default class MessagesScreen extends PureComponent {
  render() {
    let {container, cardText} = styles
  
  return (
    <SafeAreaView style={{backgroundColor: '#E5F9DB'}}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@Encan17</Text>
              <Text style={styles.cardText}>Nice game, thanks!</Text>
              <Text style={styles.cardText}>18:04</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@TheKılla80</Text>
              <Text style={styles.cardText}>I look forward to your rematch!</Text>
              <Text style={styles.cardText}>15:43</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@MyLıfe</Text>
              <Text style={styles.cardText}>We were unlucky today</Text>
              <Text style={styles.cardText}>12:35</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@Nora4</Text>
              <Text style={styles.cardText}>Hahaha we had a good time</Text>
              <Text style={styles.cardText}>09:17</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@YouAgasins</Text>
              <Text style={styles.cardText}>We could play better</Text>
              <Text style={styles.cardText}>1 day ago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@Noway</Text>
              <Text style={styles.cardText}>Next time brother!</Text>
              <Text style={styles.cardText}>1 day ago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@Jordan23</Text>
              <Text style={styles.cardText}>It would be nice if it didn't rain</Text>
              <Text style={styles.cardText}>1 day ago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <UserImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5, marginLeft: 10}}/>
            <View style={{marginTop: 15}}>
              <Text style={styles.cardText}>@TheBest10</Text>
              <Text style={styles.cardText}>It was a good match!</Text>
              <Text style={styles.cardText}>2 days ago</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F9DB',
  },
  cardText: {
    fontSize: 16,
    marginLeft: 8
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    height: 100,
    width: '96%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  }
})