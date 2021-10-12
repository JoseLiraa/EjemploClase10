import React from 'react';
import HomeScreen from './components/Menu';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import WebScreen from './components/WebScreen';
 
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Web:{
    screen: WebScreen
  }
},{ initialRouteName: 'Home' })
 
export default createAppContainer (AppNavigator)
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});