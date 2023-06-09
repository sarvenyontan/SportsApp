import { Text, SafeAreaView, ScrollView, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import { activeEvents, expiredEvents, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomePage({navigation}) {
  const [sportsTab, setSportsTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }

  const onSelectSwitch = (value) => {
    setSportsTab(value);
  }

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#E5F9DB'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello Sarven Yontan</Text>
        <TouchableOpacity  onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require('../assets/images/user-profile.jpeg')}
            style={{width: 45, height: 45}}
            imageStyle={{borderRadius: 25}}
            />
        </TouchableOpacity>  
        </View>
        <View 
          style={{
            flexDirection: 'row', 
            borderColor: '#C6C6C6', 
            borderWidth: 1, 
            borderRadius: 19, 
            marginTop: 5}}>
        <ImageBackground
          source={require('../assets/images/search.jpg')}
          style={{width: 40, height: 40}}
          imageStyle={{borderRadius: 25}}
          />
          <TextInput style={{marginLeft: 10, padding: 2, fontSize: 17}} placeholder='Search' />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 7}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={{color: '#0aada8', fontWeight: 'bold', fontSize: 16}}>See All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
      />   
      <View style={{marginVertical: 20}}>
        <CustomSwitch 
          selectionMode={1} 
          option1="Active Events"
          option2="Expired Events"
          onSelectSwitch={onSelectSwitch}
          />
      </View>

      {sportsTab == 1 && 
        activeEvents.map(item => (
          <ListItem key={item.id} 
          photo={item.poster} 
          title={item.title} 
          subTitle={item.subtitle} 
          isActive={item.isActive}
          onPress={() => navigation.navigate('EventDetails', {title: item.title, id: item.id})}
          />
        ))
      }
      {sportsTab == 2 &&
        expiredEvents.map(item => ( 
          <ListItem 
          key={item.id} 
          photo={item.poster} 
          title={item.title} 
          subTitle={item.subtitle} 
          isActive={item.isActive}
          //onPress={() => navigation.navigate('EventDetails', {title: item.title, id: item.id})}
          />
          ))
      }
      </ScrollView>
    </SafeAreaView>
  );
}
