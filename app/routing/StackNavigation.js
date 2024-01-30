import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullBlog from '../components/FullBlog';

import HomeScreen from '../screens/HomeScreen';

import DetailsScreen from '../screens/DetailsScreen';

import SingleCategoryScreen from '../screens/SingleCategoryScreen';

// function DetailsScreen({route, navigation }) {
   
//   const date  = route.params?.item;
//   return (
//     <View style={{ flex: 1 }}>
//      <FullBlog item={date} />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    
      <Stack.Navigator initialRouteName="Home" 
      
      >
        <Stack.Screen name="Home" component={HomeScreen} 
        // hide the header
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
        
        options={{
          headerTitle: '', 
       
        }}
        
        />
        <Stack.Screen name="SingleCategoryScreen" component={SingleCategoryScreen}  />

      </Stack.Navigator>
 
  );
}

export default StackNavigation;
