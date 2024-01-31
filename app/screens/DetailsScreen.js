import React from 'react';
import { View } from 'react-native';
import FullBlog from '../components/FullBlog';

// eslint-disable-next-line react/prop-types
function DetailsScreen({ route }) {
  // eslint-disable-next-line react/prop-types
  const date = route.params?.item;
  return (
    <View style={{ flex: 1 }}>
      <FullBlog
        item={date}
      />
    </View>
  );
}

export default DetailsScreen;
