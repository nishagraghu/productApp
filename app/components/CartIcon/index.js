import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartNumber: {
    marginLeft: -15,
    marginTop: -25,
    fontSize: 10,
    // marginLeft: -10,
  },
});

function CartIcon({
  cartNumber,
}) {
  return (
    <View style={styles.container}>
      <Ionicons name="cart" size={24} color="black" />
      <Text style={styles.cartNumber}>
        {cartNumber}
      </Text>

    </View>
  );
}

export default CartIcon;
