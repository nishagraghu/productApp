import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View ,Appearance ,useColorScheme,TouchableOpacity } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigation from './StackNavigation';

import React from 'react';

// function HomeScreen() {
//     const toggleTheme = () => {
//       Appearance.setColorScheme(Appearance.getColorScheme() === 'dark' ? 'light' : 'dark');
//     };
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <TouchableOpacity onPress={toggleTheme}>
//         <Text>Home Screen</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// const SearchScreen = () => {
//     return (
//         <View>
//             <Text>Search Screen</Text>
//         </View>
//     );
// }
// const SettingsScreen = () => {
//     return (
//         <View>
//             <Text>Settings Screen</Text>
//         </View>
//     );
// }

const Tab = createBottomTabNavigator();
const publicRoutes = [
    {
        name: 'Home Screen',
        component: StackNavigation,
        options: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
        }
    },
    // {
    //     name: 'Search',
    //     component: SearchScreen,
    //     options: {
    //         tabBarLabel: 'Search',
    //         tabBarIcon: ({ color, size }) => (
    //             <Ionicons name="search" color={color} size={size} />
    //           ),
    //     }
    // },
    {
        name: 'Settings',
        component: SettingsScreen,
        options: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="cog" color={color} size={size} />
              ),
        }
    }
]


export default function TabNavigationStack() {
    const [routes, setRoutes] = React.useState( [...publicRoutes ] )
    
      return (
    
        <Tab.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
          { routes?.map((route, key) => {
             const {name, component, options} = route;
             return (
                <Tab.Screen
                  key={name}
                  name={name}
                  component={component}
                  options={options}
                />
             );
          })}
        </Tab.Navigator>
      );
    }