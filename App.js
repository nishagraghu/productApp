import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Appearance ,useColorScheme,TouchableOpacity } from 'react-native';
import { store } from './store';
import { Provider } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TabNavigationStack from './app/routing/TabNavigationStack';


// const Tab = createBottomTabNavigator();




export default function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <Provider store={store}>
      <NavigationContainer
       theme={isDarkMode ? DarkTheme : DefaultTheme}
      >
        <TabNavigationStack />
      </NavigationContainer >
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
