import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { PureComponent } from 'react';
import BasketballImage from '../svg/BasketballImage';
import FootballImage from '../svg/FootballImage';
import VolleyballImage from '../svg/VolleyballImage.js';
import TennisImage from '../svg/TennisImage';

export default class FavoriteScreen extends PureComponent {
  render() {
    let {container, cardText} = styles
  
  return (
    <SafeAreaView style={{backgroundColor: '#E5F9DB'}}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <BasketballImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5}}/>
            <Text style={styles.cardText}>3 v 3 Event in Caddebostan</Text>
            <Text style={styles.cardText}>We have a professional referee at Tournament</Text>
            <Text style={styles.cardText}>07/06/2023</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <FootballImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5}}/>
            <Text style={styles.cardText}>6 v 6 Futsal Event in Bakırköy</Text>
            <Text style={styles.cardText}>We have a professional referee at Tournament</Text>
            <Text style={styles.cardText}>06/06/2023</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <TennisImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5}}/>
            <Text style={styles.cardText}>1 v 1 Event in Ataşehir</Text>
            <Text style={styles.cardText}>We have a professional referee at Tournament</Text>
            <Text style={styles.cardText}>018/06/2023</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <VolleyballImage style={{justifyContent: 'center', alignSelf: 'center', marginTop: 5}}/>
            <Text style={styles.cardText}>6 v 6 Beach Volley Event in Suadiye</Text>
            <Text style={styles.cardText}>We have a professional referee at Tournament</Text>
            <Text style={styles.cardText}>12/07/2023</Text>
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
    backgroundColor: '#E5F9DB'
  },
  cardText: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 15,
    height: 250,
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