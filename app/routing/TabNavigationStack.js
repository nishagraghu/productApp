import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigation from './StackNavigation';

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
    },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cog" color={color} size={size} />
      ),
    },
  },
];

export default function TabNavigationStack() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      { publicRoutes?.map((route) => {
        const { name, component, options } = route;
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
