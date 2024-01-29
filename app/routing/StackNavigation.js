import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullBlog from '../components/FullBlog';

import HomeScreen from '../screens/HomeScreen';

function DetailsScreen({route, navigation }) {
   
  const date  = route.params?.item;
  return (
    <View style={{ flex: 1 }}>
     <FullBlog item={date} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
 
  );
}

export default StackNavigation;
