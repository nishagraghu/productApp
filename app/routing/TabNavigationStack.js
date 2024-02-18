import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigation from './StackNavigation';
import MenuScreen from '../screens/MenuScreen';
import CartIcon from '../components/CartIcon';
import CatagoryScreen from '../screens/CatagoryScreen';

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
    name: 'Cart',
    component: CartIcon,
    options: {
      tabBarLabel: 'Cart',
      tabBarIcon: () => (
        <CartIcon />
      ),
    },
  },
  // catagory
  {
    name: 'Category',
    component: CatagoryScreen,
    options: {
      tabBarLabel: 'Category',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="apps" color={color} size={size} />
      ),
    },
  },
  {
    name: 'Menu',
    component: MenuScreen,
    options: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="menu" color={color} size={size} />
      ),
    },
  },
];

export default function TabNavigationStack() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // hide text label of tab bar
        // tabBarLabelStyle: {
        //   display: 'none',
        // },
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
