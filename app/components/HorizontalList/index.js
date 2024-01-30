// HorizontalList
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CategoryItem from '../CategoryItem';


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
            <CategoryItem item={item} />
            )}
        />
        </View>
    );
    }