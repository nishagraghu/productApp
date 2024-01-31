import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

function CategoryItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      testID="categoryTouchable"
      onPress={() => {
        navigation.navigate('SingleCategoryScreen', { item });
      }}
    >
      <View style={{ margin: 10 }}>
        <Avatar.Text size={100} label={item.category_name} />
        <Text style={{ textAlign: 'center' }} testID="categoryNameText">
          {item.category_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

CategoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    category_name: PropTypes.string,
  }).isRequired,
};

export default CategoryItem;
