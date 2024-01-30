import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      testID='categoryTouchable'
      onPress={() => {
        navigation.navigate('SingleCategoryScreen', { item });
      }}
    >
      <View style={{ margin: 10 }}>
        <Avatar.Text size={100} label={item.category_name} />
        <Text style={{ textAlign: 'center' }} testID='categoryNameText'>
          {item.category_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
