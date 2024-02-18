import * as React from 'react';
import {
  Avatar, Button, Card, Text, Chip,
} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#e9edf5',
    marginHorizontal: 3,

    // paddingRight: -10,
  },
  image: {
    padding: 20,
  },
  group: {
    // marginLeft: 10,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 100,

    backgroundColor: '#f5cea6',
    color: '#ed7b09',
  },
  off: {

    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 150,

    backgroundColor: '#f5cea6',
    color: '#ed7b09',
  },

});

function NewLaunchItem() {
  return (
    <Card style={styles.Card}>

      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Card.Content>

        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">
          {/* indian  rupy */}
          ₹ 25000  &nbsp; &nbsp;
          <Text style={{
            textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'red', paddingLeft: '30', marginLeft: '50',
          }}
          >
            ₹ 30000
          </Text>
                &nbsp;
          <Text variant="labelSmall" style={styles.off}>
            33 % off
          </Text>
        </Text>
      </Card.Content>
    </Card>
  );
}

export default NewLaunchItem;
