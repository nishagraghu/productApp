import React from 'react';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { Text, Searchbar, Appbar } from 'react-native-paper';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import NewLaunchItem from '../components/NewLaunchItem';
import DealofDay from '../components/DealofDay';

import SingleItem from '../components/SingleItem';
import CatagoryItem from '../components/CatagoryItem';

const styles = StyleSheet.create({
  page: {
    // marginTop: 50,
    flex: 0.40,

  },
  wrapper: {
    height: 200,
  },
  text: {
    color: 'black',
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  group: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 500,
  },
  flatlist: {
    marginVertical: 10,
  },
  ScrollPage:{
    marginBottom: 100,
  }
});

function CatagoryScreen() {
  const { posts } = useSelector((state) => state.counter);
  const data = [...posts, ...posts];
  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.Action icon="magnify" onPress={() => {}} />

        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title="Search..." />
        {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
      </Appbar.Header>
      <ScrollView  
      style={styles.ScrollPage}
      >
        <View 
        style={{ 
            flexDirection: 'row' ,
            justifyContent: 'space-between' 
    
               }}
        >
          <CatagoryItem />
          <CatagoryItem />
          <CatagoryItem />

        </View>
        <View 
        style={{ 
            flexDirection: 'row' ,
            justifyContent: 'space-between' 
    
               }}
        >
          <CatagoryItem />
          <CatagoryItem />
          <CatagoryItem />

        </View>
        <View style={{ 
            flexDirection: 'row' ,
            justifyContent: 'space-between' 
    
               }}>
          <CatagoryItem />
          <CatagoryItem />
          <CatagoryItem />

        </View>
        <View 
        style={{ 
            flexDirection: 'row' ,
            justifyContent: 'space-between' ,
               }}
        >
          <CatagoryItem />
          <CatagoryItem />
          <CatagoryItem />

        </View>
        {/* <DealofDay />
      <DealofDay />
      <DealofDay /> */}

      </ScrollView>
    </SafeAreaView>
  );
}

export default CatagoryScreen;
