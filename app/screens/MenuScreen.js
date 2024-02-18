import React from 'react';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { Text ,Searchbar  } from 'react-native-paper';
import NewLaunchItem from '../components/NewLaunchItem';
import DealofDay from '../components/DealofDay';

import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView, 
} from 'react-native';
import SingleItem from '../components/SingleItem';
import { Appbar } from 'react-native-paper';


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
    fontWeight: '500'
  },
  flatlist: {
    marginVertical: 10,
  }
});

function MenuScreen() {
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
    <ScrollView>
      <View style={styles.page}>
        <Swiper
          style={styles.wrapper}
          showsButtons
          showsPagination={false}
          autoplay
          autoplayTimeout={5.5}
        >
          {posts.map((item) => (
            <View key={item.id} style={styles.slide1}>
              <SingleItem item={item} />
            </View>
          ))}
        </Swiper>
        <Text variant="titleLarge" style={styles.group}>New Launched &gt;</Text>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          horizontal
          data={data}
          style={styles.flatlist}
          renderItem={({ item }) => <NewLaunchItem item={item} />}
          keyExtractor={(item) => item.id}
        />

      </View>
      <Text variant="titleLarge" style={styles.group}>Deal of the Day</Text>
      <View style={{ flexDirection: 'row' }}>
        <DealofDay />
        <DealofDay />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <DealofDay />
        <DealofDay />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <DealofDay />
        <DealofDay />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <DealofDay />
        <DealofDay />
      </View>
      {/* <DealofDay />
      <DealofDay />
      <DealofDay /> */}

    </ScrollView>
    </SafeAreaView>
  );
}

export default MenuScreen;
