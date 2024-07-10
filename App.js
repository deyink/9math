import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './screens/HomePage';
import SplashScreen from './screens/SplashScreen';
import SplashScreen1 from './screens/SplashScreen1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='SplashScreen' component={SplashScreen}  />
        <Stack.Screen name='SplashScreen1' component={SplashScreen1} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
      </NavigationContainer>
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
