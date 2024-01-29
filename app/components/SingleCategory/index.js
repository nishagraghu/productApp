import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View ,TouchableOpacity } from 'react-native';

import { Button, Card, Paragraph, Title, Text } from 'react-native-paper';
import { Avatar } from 'react-native-paper';



export default SingleCategory = () => (
  // techable opacity
  
  <TouchableOpacity
    onPress={() => Alert.alert('The ship is about to sail!')}
  > 

<Avatar.Image size={24} 
// source from  web
source={{ uri: 'https://picsum.photos/700' }} />


  
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
  chip: {
    margin: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 12,
  },
  customCardRadius: {
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  customCoverRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
  },
});

