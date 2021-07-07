import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
      </Stack.Navigator> </NavigationContainer>

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
