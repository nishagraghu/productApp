// HorizontalList
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SingleCategory from '../SingleCategory';

export default HorizontalList = ({data}) => {
    const navigation = useNavigation();
    return (
        <View>
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate('SingleCategory', {item})}>
                <View style={{margin: 10}}>
                <Avatar.Image size={104} source={{uri: item.image}} />
                <Text style={{textAlign: 'center'}}>eee</Text>
                </View>
            </TouchableOpacity>
            )}
        />
        </View>
    );
    }