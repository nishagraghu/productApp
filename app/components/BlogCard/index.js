import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { Button, Card, Paragraph, Title, Text } from 'react-native-paper';
// const stringWithoutBackslashes = originalString.replace(/\\/g, '');



export default BlogCard = ({
  
  item

}) =>{
  const navigation = useNavigation();
  const navigateToOtherScreen = (screenName, params) => {
    
     navigation.navigate(screenName, params);
  };
  return (
  // techable opacity


  <TouchableOpacity
    onPress={() => navigateToOtherScreen('Details', {item})}
  >
  <Card style={styles.card} >
    <Card.Cover
      source={{ uri:  `http://192.168.1.18/vSP/blog/backend/${item?.image1.replace(/\\/g, '')}` }}
    />
   
    <Card.Title
      title={item?.title}
      subtitle={
        item?.date
      }
    />

    <Card.Content>
      <Text variant="bodyMedium">
        {/* http://10.0.2.2/vSP/blog/backend/images/1706512711IMG-20221209-WA0068-_1_.webp  */}
       
        {item?.description.substring(0, 100)}
      </Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>
)
};

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

