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
                onPress={() => navigation.navigate('SingleCategoryScreen', {item})}>
                <View style={{margin: 10}}>
                <Avatar.Text  size={100}  label={item.category_name} />
                <Text style={{textAlign: 'center'}}>
                    {item.category_name}
                </Text>
                </View>
            </TouchableOpacity>
            )}
        />
        </View>
    );
    }