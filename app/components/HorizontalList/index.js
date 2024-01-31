// HorizontalList
import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import CategoryItem from '../CategoryItem';

function HorizontalList({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryItem item={item} />
        )}
      />
    </View>
  );
}
export default HorizontalList;
HorizontalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    category_name: PropTypes.string,
  })).isRequired,
};
