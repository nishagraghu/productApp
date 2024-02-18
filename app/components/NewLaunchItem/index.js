import * as React from 'react';
import {
  Avatar, Button, Card, Text,
} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#e9edf5',
    marginHorizontal: 10,
    minHeight: 100,
  },
  image: {
    padding: 20,
  },
  group: {
    // marginLeft: 10,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,

    backgroundColor: '#f5cea6',
    color: '#ed7b09',
  },

});

function NewLaunchItem() {
  return (
    <Card style={styles.Card}>
      <Text variant="labelSmall" style={styles.group}>
        <Ionicons name="timer" color="#ed7b09" />
        13 Jan
      </Text>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Card.Content>

        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
  );
}

export default NewLaunchItem;
