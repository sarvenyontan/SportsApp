import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TournamentImage from '../svg/TournamentImage';

let locationOfInterest = [
  {
    title: 'First',
    location: {
      latitude: 40.986192,
      longitude: 28.911328
    },
    description: "My First Marker"
  },
  {
    title: 'Second',
    location: {
      latitude: 40.956709,
      longitude: 28.815439
    },
    description: "My Second Marker"
  },
  {
    title: 'Third',
    location: {
      latitude: 40.871197,
      longitude: 29.130901
    },
    description: "My Second Marker"
  },
  {
    title: 'Fourth',
    location: {
      latitude: 40.923021,
      longitude: 29.122043
    },
    description: "My Second Marker"
  },
  {
    title: 'Fifth',
    location: {
      latitude: 40.962426,
      longitude: 29.062781
    },
    description: "My Second Marker"
  },
  {
    title: 'Sixth',
    location: {
      latitude: 40.979431,
      longitude: 29.055650
    },
    description: "My Second Marker"
  },
  {
    title: 'Seventh',
    location: {
      latitude: 41.048021,
      longitude: 29.015698
    },
    description: "My Second Marker"
  }
]

export default function ChartScreen() {
  const onRegionChange = () => {
    //console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>Sport Event</Text>
                  <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 5}}>Event is coming soon!</Text>
                  {/*<Text>A short description</Text>*/}
                 <TournamentImage />
                </View>
                <View style={styles.arrowBorder}></View>
                <View style={styles.arrow}></View>
              </View>
            </Callout>
        </Marker>
      )
    })
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 41.01384,
          longitude: 28.94966 
        }}
        >
          {showLocationsOfInterest()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    color: 'green'
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  }
});