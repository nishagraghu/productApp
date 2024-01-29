import { StyleSheet,useColorScheme } from 'react-native';
import { store } from './store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

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
