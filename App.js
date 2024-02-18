import React from 'react';
import { Provider } from 'react-redux';
import { useColorScheme, LogBox } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import TabNavigationStack from './app/routing/TabNavigationStack';
import store from './app/redux/store';

LogBox.ignoreLogs(['Warning: ViewPropTypes']);

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <TabNavigationStack />
      </NavigationContainer>
    </Provider>
  );
}
