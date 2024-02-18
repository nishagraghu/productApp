import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { IP } from '../../Const/urls';

import styles from './style';

function SingleProduct({ item }) {
  const { image1, title } = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      testID="categoryTouchable"
      onPress={() => {
        navigation.navigate('Details', { item });
      }}
    >
      <View style={styles.item}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `http://${IP}/vSP/blog/backend/${image1.replace(/\\/g, '')}` }} width={500} />
        </Card>
        <View style={styles.CardTitle}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

SingleProduct.propTypes = {
  item: PropTypes.shape({
    image1: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default SingleProduct;
